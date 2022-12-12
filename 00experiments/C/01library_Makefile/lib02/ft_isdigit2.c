#include "../libft/libft.h"

char	*ft_isdigit2(int i)
{
		if (ft_isdigit(i) == 1)
				return (ft_strdup("It's digit\n"));
		else
				return (ft_strdup("It's not digit\n"));
}
