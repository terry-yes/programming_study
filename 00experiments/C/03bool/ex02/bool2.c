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
