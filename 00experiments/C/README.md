### 실험, 관찰 목록

---

| No.  | 타이틀                                                       |                    주제                     |                            비고                            |
| ---- | ------------------------------------------------------------ | :-----------------------------------------: | :--------------------------------------------------------: |
|      |                                                              |                                             |                                                            |
| 06   | [open, read, close 간단 예제](06open_read_close/README.md)   |       `c`<br />`open`,`read`,`close`        |                         2020.05.23                         |
| 05   | [포인터배열 vs 배열 포인터](./05ptr_arr/README.md)           |                     `C`                     |                                                            |
| 04   | [메모리 누수 검사 방법](04leak/README.md)                    |            `C`,`leaks`,`system`             |                         2020.05.05                         |
| 03   | [bool 라이브러리 직접정의하기](03bool/README.md)             | `C`,`bool`, `stdbool.h`,`typedef`, `define` |                         2020.05.05                         |
| 02   | [Symbolic Link와 Hard Link의 차이 및 관찰](./02link/README.md) |  `Shell`,`Hard Link`,<br />`Symbolic Link`  |                         2020.05.03                         |
| 01   | [Library을 이용한 컴파일(Makefile로 자동화)<br />Makefile에서 output파일들 폴더지정,<br />Makefile에서 글씨 색상 입히기](./01library_Makefile/README.md) |          `C`,`Library`, `Makefile`          | 좀 더 내용이 많아지면 분리 필요<br />2020.05.01~2020.05.02 |

<br>


### 짤막 실험, 관찰결과

---

1. math라이브러리의 sin, cos들은 180분법이 아닌 radian의 각도를 인자로 받음
2. !! operator는 null포인터일때만 0인듯 아무것도 assign되어있지 않을때조차 1로 반환됨

3. gcc -fsanitize=address [filename]

<br>

### 추후 관찰 or 실험 주제

---

1. char *와 char[]의 차이
2. 함수로 넘겨받은 데이터를 프리 했을때 넘겨받기 전 데이터는 어떻게 되는가? (데이터 그대로 넘겨받았을 때 데이터의 주소를 받았을때 비교)
3. printf와 write의 순서 뒤바뀜 현상(fflush로 처리가능) -- https://42born2code.slack.com/archives/CU6MTFBNH/p1588657579055500
4. malloc앞에 (char *)을 붙일때가 있고 안붙여도 되는게 있던데 뭐가 맞는지, 혹은 어떤상황에 어떤것을 써야하는지?
5. c에서 변수의 type 확인하는 방법 typeof가 뭔가 아닌듯
6. Const * char 위치에 따른 상수위치 변화 --https://stackoverflow.com/questions/8091770/const-char-and-char-const-are-they-the-same
   https://42born2code.slack.com/archives/CU6MTFBNH/p1582995497003100
7. Stack push구현할때 stack = &new;랑 *stack = new;의 차이가 뭔지 생각해보기
8. stderr, stdout difference and redirect - https://stackoverflow.com/questions/3385201/confused-about-stdin-stdout-and-stderr
9. 매크로로 함수 만들기 예)`#define max(a,b) ((a)>(b)?(a):(b))`
10. malloc으로 char 5사이즈만큼 만들고 3번째쯤에 '\0'을 넣고 프리하면 다 프리가 되나?
11. git -u 혹은 --set-upstream-to 가 뭐지?
12. 