/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_strnstr.c                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: taelee <taelee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/02/26 15:44:20 by taelee            #+#    #+#             */
/*   Updated: 2020/04/04 16:49:14 by taelee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "libft.h"
#include <stdio.h>

char	*ft_strnstr(const char *stack, const char *needle, size_t len)
{
	size_t	i;
	size_t	needlelen;

	needlelen = ft_strlen(needle);
	if (*needle == '\0')
		return ((char *)stack);
	i = 0;
	while (i < len && stack[i])
	{
		if (ft_strncmp(&stack[i], needle, needlelen) == 0
				&& i + needlelen <= len)
			return ((char *)(&stack[i]));
		i++;
	}
	return (0);
}
