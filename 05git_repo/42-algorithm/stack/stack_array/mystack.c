#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include "stack.h"

t_stack		*stack_init(unsigned int max_size)
{
	t_stack	*stack;

	stack = (t_stack *)malloc(sizeof(t_stack) * max_size);
	if (stack == NULL)
		return (NULL);
	stack->top_index = -1;
	stack->max_size = max_size;
	stack->data = (void **)malloc(sizeof(void *) * max_size);
	if (stack->data == NULL)
	{
		free(stack);
		return (NULL);
	}
	return (stack);
}

int			stack_push(t_stack *stack, void *data)
{
	if (stack == NULL || stack->data == NULL
			|| stack->top_index + 1 >= stack->max_size)
	{
		return (0);	
	}
	stack->top_index++;
	stack->data[stack->top_index] = data;
	return (1);
}

int			stack_size(t_stack *stack)
{
	if (stack == NULL)
		return (0);
	return (stack->top_index + 1);
}

void		*stack_peek(t_stack *stack)
{
	if (stack == NULL || stack->data == NULL)
		return (0);
	return (stack->data[stack->top_index]);
}

void		*stack_pop(t_stack *stack)
{
	void	*temp;

	if (stack == NULL || stack->data == NULL || stack->top_index < 0)
		return (0);
	temp = stack_peek(stack);
	stack->data[stack->top_index] = NULL;
	stack->top_index--;
	return (temp);
	
}

void		stack_clear(t_stack *stack, void (*free_data)(void *))
{
	if (stack == NULL || stack->data == NULL)
		return ;
	free(stack->data);
}

void		free_stack(t_stack *stack, void (*free_data)(void *))
{
	if (stack == NULL)
		return ;
	stack_clear(stack, free_data);
	free_data(stack);
}

int		main(void)
{
	t_stack	*stack;

	//init check
	stack = stack_init(30);
	printf("%p\n", stack);
	printf("init completed and max_size of stack : %d\n\n", stack->max_size);
	//push check
	stack_push(stack, strdup("'first data'"));
	printf("data %s is pushed\n\n", stack->data[stack->top_index]);
	//peek check
	printf("data on the top :%s\n\n", stack_peek(stack));
	//pop check
	printf("top index before pop: %d\n", stack->top_index);
	printf("data %s is poped\n", stack_pop(stack));
	printf("top index after pop: %d\n\n", stack->top_index);
	//free_stack
	printf("init completed and max_size of stack : %d\n\n", stack->max_size);
	printf("%p\n", stack);
	free_stack(stack, free);
	printf("init completed and max_size of stack : %d\n\n", stack->max_size);
	printf("%p\n", stack);
}
