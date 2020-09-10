#include <stdlib.h>
#include <stdio.h>

int		main(void)
{
	char *heap;
	int i;

	heap = malloc(sizeof(char) * 6);
	heap[0] = 'h';
	free(heap);
	i = 1;
	while (i)
	{
		i++;	
	}
}
