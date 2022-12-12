/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_memccpy.c                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: taelee <taelee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/02/24 23:44:06 by taelee            #+#    #+#             */
/*   Updated: 2020/04/04 02:32:06 by taelee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "libft.h"

/*
** DESCRIPTION
**	The memccpy() function copies no more than n bytes from memory area
**	src to memory are dest, stopping when the character c is found.
**	If the memory areas overlap, the results are undefined.
**
** RETURN VALUES
**	The memccpy() function returns a pointer to the next character in
**	dest after c, or NULL if c was not found in the first n characters of
**	src.
*/

void	*ft_memccpy(void *dest, const void *src, int c, size_t n)
{
	unsigned char	*dest_temp;
	unsigned char	*src_temp;

	dest_temp = (unsigned char *)dest;
	src_temp = (unsigned char *)src;
	while (n--)
	{
		*dest_temp = *src_temp;
		if (*dest_temp == (unsigned char)c)
			return (dest_temp + 1);
		dest_temp++;
		src_temp++;
	}
	return (0);
}
