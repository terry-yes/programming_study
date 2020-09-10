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

1 : ft_isdigit2.c main.c
	gcc -L ../libft -lft ft_isdigit2.c main.c -o withoutLib.out

libft = libft.a
SRC_DIR = ../libft/
SRCS = $(addprefix $(SRC_DIR), $(SRC))
SRC = ./ft_memset.c ./ft_bzero.c ./ft_memcpy.c ./ft_memccpy.c ./ft_memmove.c \
		./ft_memchr.c ./ft_memcmp.c ./ft_strlen.c ./ft_strlcpy.c ./ft_strlcat.c \
		./ft_strchr.c ./ft_strrchr.c ./ft_strnstr.c ./ft_strncmp.c ./ft_atoi.c \
		./ft_isalpha.c ./ft_isdigit.c ./ft_isalnum.c ./ft_isascii.c ./ft_isprint.c \
		./ft_toupper.c ./ft_tolower.c ./ft_calloc.c ./ft_strdup.c ./ft_substr.c \
		./ft_strjoin.c ./ft_strtrim.c ./ft_split.c ./ft_itoa.c ./ft_strmapi.c \
		./ft_putchar_fd.c ./ft_putstr_fd.c ./ft_putendl_fd.c ./ft_putnbr_fd.c

OJB_DIR = ./obj/
OBJS = $(addprefix $(OBJ_DIR), $(OBJ))
OBJ = ${SRCS:.c=.o}
HEADER = ./

all: ${libft}

.c.o : ${SRCS}
	gcc -c $< -o ${<:.c=.o}

${NAME}: ${OBJS}
	ar rc ${libft} ${OBJS}

$(OJB_DIR):
	mkdir -p $(OBJ_DIR)

clean:
	rm -rf ${OBJS} 
fclean:
	rm -rf ${libft}

re:	fclean all

.PHONY: re all clean fclean bonus
