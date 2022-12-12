#include <stdio.h>
#include <unistd.h>
#include <fcntl.h>

#define BUFF_SIZE 100
int		main(void)
{
	int		fd;
	int		read_size;
	char	buff[BUFF_SIZE + 1];
	int		i;


	i = 0;
	while ((read_size = read(0, buff, BUFF_SIZE)) > 0)
	{
		printf("read_size: %d\n", read_size);
		buff[read_size] = '\0';
		printf("%d: |%s|\n", i, buff);
		i++;
	}
}
