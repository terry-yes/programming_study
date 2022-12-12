/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_strtrim.c                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: taelee <taelee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/02/27 15:29:51 by taelee            #+#    #+#             */
/*   Updated: 2020/04/05 16:40:31 by taelee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "libft.h"

static int		is_set(char c, char const *set)
{
	int i;

	i = 0;
	while (set[i])
	{
		if (c == set[i])
			return (1);
		i++;
	}
	return (0);
}

static int		find_index(char const *s1, char const *set, int flag)
{
	int i;

	i = (flag == 1) ? 0 : ft_strlen(s1) - 1;
	while (s1[i] && i >= 0 && is_set(s1[i], set))
		(flag == 1) ? i++ : i--;
	return (i);
}

char			*ft_strtrim(char const *s1, char const *set)
{
	int		start;
	int		end;
	char	*result;

	if (!s1)
		return (NULL);
	if (!set)
		return (ft_strdup(s1));
	start = 0;
	while (is_set(s1[start], set))
		start++;
	if (start == (int)ft_strlen(s1))
		return (ft_strdup(""));
	end = find_index(s1, set, 2);
	if (!(result = (char *)malloc(sizeof(char) * (end - start + 2))))
		return (0);
	ft_strlcpy(result, s1 + start, end - start + 2);
	return (result);
}
