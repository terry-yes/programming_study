#include <stdarg.h>
#include <stdio.h>

void	arg_function(int args, ...)
{
	printf("%d\n", args);
}

int		main(void)
{
	arg_function(1, 10);
	arg_function(2, 10, 20);
	arg_function(3, 10, 20, 30);
	arg_function(4, 10, 20, 30);
}
