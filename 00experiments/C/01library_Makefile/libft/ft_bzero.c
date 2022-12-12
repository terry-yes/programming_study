/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_bzero.c                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: taelee <taelee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/04/04 02:09:03 by taelee            #+#    #+#             */
/*   Updated: 2020/04/04 02:11:27 by taelee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "libft.h"

void	*ft_bzero(void *dest, size_t len)
{
	unsigned char *ptr;

	ptr = dest;
	while (len)
	{
		*ptr = 0;
		ptr++;
		len--;
	}
	return (dest);
}
