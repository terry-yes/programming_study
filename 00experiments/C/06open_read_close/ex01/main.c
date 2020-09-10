#include <stdio.h>
#include <unistd.h>
#include <fcntl.h>

#define BUFF_SIZE 3
int		main(void)
{
	int		fd;
	int		read_size;
	char	buff[BUFF_SIZE + 1];
	int		i;


	fd = open("./test", O_RDONLY);
	i = 0;
	while ((read_size = read(fd, buff, BUFF_SIZE)) > 0)
	{
		buff[read_size] = '\0';
		printf("%d: |%s|\n", i, buff);
		i++;
	}
	close(fd);
}
