#include <unistd.h>
#include <stdio.h>

void	third(void)
{
	printf("%s\n", "third");
}

void	second(void)
{
	third();
	printf("%s\n", "second");
}
void	first(void)
{
	second();
	printf("%s\n", "first");
}

int main(void)
{
	first();
}
