#include <stdarg.h>
#include <stdio.h>

void	arg_function(int size, ...)
{
	va_list		arg;
	int			i;

	va_start(arg, size);
	i = 0;
	while (i < size)
	{
		printf("%d ", va_arg(arg, int));
		i++;
	}
	printf("\n");
	va_end(arg);
}

int		main(void)
{
	arg_function(1, 10);
	arg_function(2, 10, 20);
	arg_function(3, 10, 20, 30);
	arg_function(4, 10, 20, 30, 40);
}
