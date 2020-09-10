[뒤로가기](../README.md)

## 메모리 누수 검사하기



valgrind라는 프로그램이 macOS mojave까지는 작동을 해서 메모리 누수를 검사해줬던거 같은데

macOS Catalina부터는 작동을 안하는 관계로 메모리 누수를 검사하는 방법을 정리해보았다.

### 1. ex01)파일 실행하고 leak명령어로 검사

- 컴파일 후에 파일을 `./a.out` 이런식으로 실행하고 `leaks a.out`
- 다만 이때 파일이 실행중이어야지 검사할 수 있음
- while문으로 강제로 프로그램이 종료되지 않게 하고 leaks로 검사해봄



### 2. leaks명령어를 프로그램 코드에 삽입

- 1번의 단점을 보완한 방식
- 프로그램 내부에 leaks를 삽입하여 프로그램이 종료되기 전에 leak되 부분이 있으면 출력되게끔 한다. 
  코드는 아래와 같다.

`system("leaks a.out > leaks_result_temp; cat leaks_result_temp | grep leaked" && rm -rf leaks_result_temp);`



```c
#include <stdlib.h>
#include <string.h>

int main(void)
{
	char *heap;

	heap = malloc(sizeof(char) * 6);
	heap[0] = 'h';
	heap[1] = 'e';
	heap[2] = 'l';
	heap[3] = 'l';
	heap[4] = 'o';
	heap[5] = '\0';

	free(heap);
	system("leaks a.out > leaks_result; cat leaks_result | grep leaked && rm -rf leaks_result");
	return (0);
}
```

