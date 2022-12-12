/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_memmove.c                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: taelee <taelee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/02/25 14:19:27 by taelee            #+#    #+#             */
/*   Updated: 2020/04/04 02:41:27 by taelee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "libft.h"

/*
** DESCRIPTION
**      The memmove() function copies len bytes from string src to string dst.
**      The two strings may overlap; the copy is always done in a non-destruc-
**      tive manner.
**
** RETURN VALUES
**      The memmove() function returns the original value of dst.
*/

void	*ft_memmove(void *dest, const void *src, size_t len)
{
	size_t	i;

	if (!dest && !src)
		return (NULL);
	if (src < dest)
		while (len--)
			((unsigned char *)dest)[len] = ((unsigned char *)src)[len];
	else
	{
		i = 0;
		while (i < len)
		{
			((unsigned char *)dest)[i] = ((unsigned char *)src)[i];
			i++;
		}
	}
	return (dest);
}
