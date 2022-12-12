현재 상황은 libft에 .c 코드 파일 여러개와 .h 헤더파일이 하나 있다. 이를 라이브러리 파일로 만들어 주는 makefile이 있다.

이 .c파일에 있는 함수들을 **현재 파일**에 불러와서 쓰고 싶을때 사용 가능한 방법들을 정리하려고 한다.

아래 예제 파일 주소:

https://github.com/taelee42/run_makefile_and_library.git

### 1. lib00) library파일을 함께 compile

- 
  library파일을 함께 compile하려면


`gcc -L <라이브러리파일 폴더명> -l<라이브러리파일명> <c파일>`

ex) `gcc -L ../libft/ -lft main.c`



- 이때 c 파일 내부에 라이브러리 파일의 헤더파일이 include되어 있어야함.

`#include "<라이브러리 헤더>"`

ex) `#include "../libft/libft.h"`



- 실험) main.c파일에서 `#include "../libft/libft.h"` 을 지우고


`gcc -L ../libft/ -lft main.c` 만 실행시켰는데 warning이 뜨긴하지만 output파일이 생성됨



### 2. lib01) out00을 Makefile로 자동화 하기



```Makefile
NAME = output.out

all : $(NAME)

$(NAME) : main.c
		  gcc -L ../libft -lft main.c -o output.out

clean :
	rm -rf $(NAME)

re: clean all 
```



- out00과 같은 역할을 하지만 몇가지 기능을 추가함.

1. `-o`  옵션: output 파일 이름 지정

2. `clean`: output 파일 삭제 기능
3. `re` : output 파일을 지우고(clean기능) 다시 만듬



### 3. lib02) 라이브러리 파일없이 원본 c파일로부터 컴파일하기


1. 먼저 원본 c파일 -> o파일로 변환(libft폴더내에 Makefile 사용해서 `make` 사용)
2. 현재 c파일들 -> o파일로 변환
   `gcc -c ft_isdigit2.c`
   -c 옵션으로 object파일을 만들 수 있음
3. 1,2번의 모든 o파일을 사용하여 라이브러리 파일 만들기
   ar rc <라이브러리 파일명> 모든 o파일
   `ar rc libnew.a ft_isdigt2.o ../libft/*.o`
4. 위 라이브러리 파일로 최종 main.c파일 컴파일
   `gcc -L ./ -lnew main.c`

- 신기하게도 2번과정에서 ft_isdigit2.c (소스파일) 이외의 헤더파일이 필요하지 않음
  라이브러리 파일로 컴파일할때는 라이브러리 파일을 언급해줘야하는데 
  o파일 만들때는 그런게 필요없음.(신기함)
- 만약 라이브러리 과정없이 컴파일 하려면 -> `gcc -L ../libft -lft ft_isdigit2.c main.c`
  



### 4. lib03) 라이브러리파일을 통해 라이브러리 파일 만들기

알아보는 중. 가능한지 잘 모르겠음 추후 추가해야함

### 5. lib04) Makefile- 지정 폴더에 오브젝트 파일 몰아넣기(addprefix)

```makefile
NAME = libft.a
SRC_DIR = ../libft/
SRCS = $(addprefix $(SRC_DIR), $(SRC))
SRC = ./ft_memset.c ./ft_bzero.c ./ft_memcpy.c ./ft_memccpy.c ./ft_memmove.c \
		./ft_memchr.c ./ft_memcmp.c ./ft_strlen.c ./ft_strlcpy.c ./ft_strlcat.c \
		./ft_strchr.c ./ft_strrchr.c ./ft_strnstr.c ./ft_strncmp.c ./ft_atoi.c \
		./ft_isalpha.c ./ft_isdigit.c ./ft_isalnum.c ./ft_isascii.c ./ft_isprint.c \
		./ft_toupper.c ./ft_tolower.c ./ft_calloc.c ./ft_strdup.c ./ft_substr.c \
		./ft_strjoin.c ./ft_strtrim.c ./ft_split.c ./ft_itoa.c ./ft_strmapi.c \
		./ft_putchar_fd.c ./ft_putstr_fd.c ./ft_putendl_fd.c ./ft_putnbr_fd.c

OBJ_DIR = ./obj/
OBJ = ${SRC:.c=.o}
OBJS = $(addprefix $(OBJ_DIR), $(OBJ))
HEADER = ../libft

all: ${NAME}

$(NAME): $(OBJ_DIR) $(OBJS)
		   ar rc $(NAME) $(OBJS)

$(OBJ_DIR)%.o: $(SRC_DIR)%.c $(HEADER)
		gcc -c $< -o $@

$(OBJ_DIR):
	mkdir -p $(OBJ_DIR)

clean:
	rm -rf ${OBJS}
fclean:
	rm -rf ${NAME}

re:	fclean all

.PHONY: re all clean fclean
```

포인트는 와일드 카드 %사용과

소스파일과 폴더를 따로 지정해서 addprefix로 합쳐주는 기능!



### 6. color00) Makefile에 색상넣기

```makefile
# COLORS #

# This is a minimal set of ANSI color codes
_END		=	\033[0;0m
_BOLD		=	\033[0;1m
_UNDER		=	\033[0;4m
_REV		=	\033[0;7m

# Colors
_GREY		=	\033[0;30m
_RED		=	\033[0;31m
_GREEN		=	\033[0;32m
_YELLOW		=	\033[0;33m
_BLUE		=	\033[0;34m
_PURPLE		=	\033[0;35m
_CYAN		=	\033[0;36m
_WHITE		=	\033[0;37m

# Inverted, i.e. colored backgrounds
_IGREY		=	\033[0;40m
_IRED		=	\033[0;41m
_IGREEN		=	\033[0;42m
_IYELLOW	=	\033[0;43m
_IBLUE		=	\033[0;44m
_IPURPLE	=	\033[0;45m
_ICYAN		=	\033[0;46m
_IWHITE		=	\033[0;47m

# **************************************************************************** #

```

위 내용을 집어넣고 (필요없는 색상은 빼도됨)

Makefile내부에 

```makefile
main.out : main.c
	@echo "$(_GREEN)Compile starting$(_END)"
	gcc main.c -o main.out
	@echo "$(_RED)Result: $(NAME)$(_END)"
```

이런식으로 치면 됨

이때 @로 시작해야 메세지가 두번쳐지지 않음(내부명령어를 안보이게 하는 듯)

gcc같은 명령어는 내부적으로 어떻게 돌아가는지 보는게 좋으므로 @없이 시작하는게 좋은듯

그리고 끝날때 $(_END)로 끝나야 다음 줄까지 색상이 침범하지 않음. 이걸 안치면 현재줄부터 끝까지 GREEN이 됨

