/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_memcpy.c                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: taelee <taelee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/02/24 15:49:26 by taelee            #+#    #+#             */
/*   Updated: 2020/04/04 02:35:14 by taelee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "libft.h"

void	*ft_memcpy(void *dest, const void *src, size_t n)
{
	char		*dest_temp;
	const char	*src_temp;

	if (!(char *)dest && !(char *)src)
		return (0);
	dest_temp = dest;
	src_temp = src;
	while (n)
	{
		*dest_temp = *src_temp;
		dest_temp++;
		src_temp++;
		n--;
	}
	return (dest);
}
