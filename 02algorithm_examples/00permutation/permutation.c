#include <stdio.h>
#include <string.h>

void	swap(char *s1, char *s2)
{
	char	temp;

	temp = *s1;
	*s1 = *s2;
	*s2 = temp;
}
void	permute(char *str, int begin, int end)
{
	if (begin == end)
		printf("%s\n", str);
	else
	{
		for (int i = begin; i < end + 1; i++)
		{
			swap(&str[begin], &str[i]);
			permute(str, begin + 1, end);
			swap(&str[begin], &str[i]);
		}
	}
}

void	permuteArray(char *str)
{
	permute(str, 0, strlen(str) - 1);
}
int		main(void)
{
	char	*str;

	str = strdup("abc");
	permuteArray(str);

}
