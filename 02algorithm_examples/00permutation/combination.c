#include <stdio.h>

//값만 계산할때
int		combvalue(n, r)
{
	if (r == 0 || n == r)
		return (1);
	return (combination(n-1, r-1) + combination(n-1, r));
		
}

void	
int		main(void)
{
	printf("%d\n", combvalue(6, 4));
}
