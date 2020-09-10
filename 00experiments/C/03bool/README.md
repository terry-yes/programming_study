[뒤로가기](../README.md)

## 라이브러리 없이 bool 자료형 정의하기



### 1. ex01)일단 라이브러리로 bool 구현하기

```c
#include <stdio.h>
#include <stdbool.h>

int		main(void)
{
	bool a;
	bool b;

	a = true;
	b = false;
	printf("true: %d\n", a);
	printf("false: %d\n", b);
}
```

- bool자료형을 위한 stdbool.h 라이브러리 불러와야됨
- true, false는 소문자로
- 출력해보면 ture, false가 각각 1과 0에 대응됨



### 2. ex02)라이브러리 없이 구현하기

```c
#include <stdio.h>

typedef int bool;
#define true 1
#define false 0

int		main(void)
{
	bool a;
	bool b;

	a = true;
	b = false;
	printf("true: %d\n", a);
	printf("false: %d\n", b);
}
```



- 이렇게 하면 bool라이브러리 없이 bool자료형을 정할 수 있음
- 사실 자료형을 정했다기 보다는 bool을 int를 통해 재정의했고 `typedef int bool;`
- true는 1에 false는 0에 매크로(?)로 정의했을 뿐이다.
- 여기서 bool과 true, false는 관계가 없음. (bool을 지우고 `int a`, `int b`로 해도 true, false가 똑같이 출력됨)