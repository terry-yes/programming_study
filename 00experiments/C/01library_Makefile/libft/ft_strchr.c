/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_strchr.c                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: taelee <taelee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/02/26 00:02:13 by taelee            #+#    #+#             */
/*   Updated: 2020/04/04 02:52:32 by taelee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "libft.h"

/*
** DESCRIPTION
**      The strchr() function locates the first occurrence of c (converted to a
**      char) in the string pointed to by s.  The terminating null character is
**      considered to be part of the string; therefore if c is `\0', the func-
**      tions locate the terminating `\0'.
**
** RETURN VALUES
**      The functions strchr() and strrchr() return a pointer to the located
**      character, or NULL if the character does not appear in the string.
*/

char	*ft_strchr(const char *s, int c)
{
	char	*str;
	int		i;

	str = (char *)s;
	i = 0;
	while (str[i] && str[i] != (char)c)
	{
		i++;
	}
	if (str[i] == (char)c)
		return (&str[i]);
	else
		return (0);
}
