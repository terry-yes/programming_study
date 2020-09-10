#include <stdio.h>


int		main(void)
{
	int i;
	unsigned int	ui;
	unsigned long	ul;

	i = -8462;
	ui = -i;
	printf("%u\n", ui);
	ul = -i;
	printf("%lu\n", ul);
}
