NAME = output.out

all : $(NAME)

$(NAME) : main.c
		  gcc -L ../libft -lft main.c -o output.out

clean :
	rm -rf $(NAME)

re: clean all
