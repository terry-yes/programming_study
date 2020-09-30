#ifndef STACK_H
# define STACK_H
typedef struct s_stack
{
	unsigned int	max_size;
	int		top_index;
	void		**data;
}		t_stack;

t_stack		*stack_init(unsigned int max_size);

#endif
