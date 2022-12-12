/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_memset.c                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: taelee <taelee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/02/24 15:49:26 by taelee            #+#    #+#             */
/*   Updated: 2020/04/04 02:43:04 by taelee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "libft.h"

void	*ft_memset(void *dest, int val, size_t len)
{
	unsigned char *ptr;

	ptr = dest;
	while (len)
	{
		*ptr = val;
		ptr++;
		len--;
	}
	return (dest);
}
