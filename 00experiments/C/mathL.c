#include <stdio.h>
#include <math.h>

int		main(void)
{
		double a = 3.5;
		double root = sqrt(a);
		double ceil_a = ceil(a);

		printf("%f\n", root);
		printf("%f\n", ceil_a);
		printf("%d\n", (int)ceil_a);
		printf("%d\n", 16/4*2);

		double p = 3.14;
		double q = 180;
		printf("%f\n", cos(p));
		printf("%f\n", cos(q));
}
