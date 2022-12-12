#include <string.h>
#include <stdio.h>

int main(void)
{
	char a[] = "hello";
	char b[] = "he";

	printf("%s\n", strstr(a, b));
}
