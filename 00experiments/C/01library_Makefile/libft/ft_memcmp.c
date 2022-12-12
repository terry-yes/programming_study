/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_memcmp.c                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: taelee <taelee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/02/25 17:33:57 by taelee            #+#    #+#             */
/*   Updated: 2020/04/04 02:34:40 by taelee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "libft.h"

/*
** DESCRIPTION
**      The memcmp() function compares byte string s1 against byte string s2.
**      Both strings are assumed to be n bytes long.
** RETURN VALUES
**      The memcmp() function returns zero if the two strings are identical,
**      otherwise returns the difference between the first two differing bytes
**      (treated as unsigned char values, so that `\200' is greater than `\0',
**      for example).  Zero-length strings are always identical.  This behavior
**      is not required by C and portable code should only depend on the sign of
**      the returned value.
*/

int	ft_memcmp(const void *s1, const void *s2, size_t n)
{
	while (n--)
	{
		if (*(unsigned char*)s1 != *(unsigned char*)s2)
			return (*(unsigned char*)s1 - *(unsigned char*)s2);
		s1++;
		s2++;
	}
	return (0);
}
