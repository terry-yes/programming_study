/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_itoa.c                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: taelee <taelee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/02/27 21:31:14 by taelee            #+#    #+#             */
/*   Updated: 2020/04/04 03:04:54 by taelee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "libft.h"

static int	digit_count(int n)
{
	int len;
	int number;

	if (n == 0)
		return (1);
	else if (n < 0)
		len = 1;
	else
		len = 0;
	number = n;
	while (number)
	{
		number = number / 10;
		len++;
	}
	return (len);
}

char		*ft_itoa(int n)
{
	char	*result;
	int		len;

	len = digit_count(n);
	result = (char *)malloc(sizeof(char) * (len + 1));
	if (!result)
		return (0);
	result[len--] = 0;
	if (n == 0)
	{
		result[0] = '0';
		return (result);
	}
	if (n < 0)
		result[0] = '-';
	while (n)
	{
		if (n < 0)
			result[len--] = -(n % 10) + 48;
		else
			result[len--] = n % 10 + 48;
		n /= 10;
	}
	return (result);
}
