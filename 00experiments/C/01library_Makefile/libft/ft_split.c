/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_split.c                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: taelee <taelee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/02/27 18:53:38 by taelee            #+#    #+#             */
/*   Updated: 2020/04/06 14:39:02 by taelee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "libft.h"
#include <stdio.h>

static int		is_deli(char s, char c)
{
	if (s == c)
		return (1);
	return (0);
}

static int		alloc_count(char const *s, char c)
{
	int i;
	int	count;

	i = 0;
	count = 0;
	while (s[i])
	{
		while (is_deli(s[i], c) && s[i])
			i++;
		if (s[i])
			count++;
		while (!is_deli(s[i], c) && s[i])
			i++;
	}
	return (count);
}

char			**initialize(char **result, char const *s, char c)
{
	int i;
	int j;
	int k;

	j = 0;
	while (*s)
	{
		while (is_deli(*s, c) && *s)
			s++;
		i = 0;
		while (!is_deli(s[i], c) && s[i])
			i++;
		if (i == 0)
			break ;
		if (!(result[j] = (char *)malloc(sizeof(char) * (i + 1))))
			return (0);
		k = 0;
		while (k < i)
			result[j][k++] = *s++;
		result[j][k] = 0;
		j++;
	}
	result[j] = 0;
	return (result);
}

char			**ft_split(char const *s, char c)
{
	char	**result;

	if (!s)
		return (NULL);
	result = (char **)malloc(sizeof(char *) * (alloc_count(s, c) + 1));
	if (!result)
		return (0);
	return (initialize(result, s, c));
}
