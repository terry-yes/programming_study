#include <stdlib.h>
#include <stdio.h>
#include "stack.h"

t_stack		*stack_init(void)
{
	t_stack	*stack;

	stack = (t_stack *)malloc(sizeof(t_stack));
	if (!stack)
		return (NULL);
	stack->size = 0;
	stack->top = NULL;
	return (stack);
}

t_node		*create_elem(void *data)
{
	t_node *node;

	node = (t_node *)malloc(sizeof(t_node));
	if (!node)
		return (NULL);
	node->data = data;
	node->next = NULL;
	return (node);
}

int			stack_push(t_stack *stack, void *data)
{
	t_node *new;

	if (stack == NULL || (new = create_elem(data)) == NULL)
		return (0);
	new->next = stack->top;
	printf("new->next: %p\n", new->next);
	printf("stack->top: %p\n", new->next);
	stack->top = new;
	stack->size++;
	return (1);
}

int			stack_size(t_stack *stack)
{
	if (stack == NULL)
		return (0);
	return (stack->size);
}

t_node		*stack_peek(t_stack *stack)
{
	if (stack == NULL || stack->top == NULL)
		return (NULL);
	return (stack->top);
}

t_node		*stack_pop(t_stack *stack)
{
	t_node	*temp;

	if (stack == NULL || stack->top == NULL ||stack->size <= 0)
		return (NULL);
	temp = stack->top;
	temp->next = 0;
	stack->top = stack->top->next;
	stack->size--;
	return (temp);
}

void		stack_clear(t_stack *stack, void(*free_data)(void *))
{
	t_node *curr;

	if (stack == NULL || free_data == NULL)
		return ;
	stack->size = 0;
	curr = stack->top;
	while (curr)
	{
		stack->top = curr->next;
		curr->next = NULL;
		free_data(curr->data);
		free(curr);
		curr = stack->top;
	}

}


int		main(void)
{
	t_stack *stack;

	stack = stack_init();
	printf("stack_size: %d\n", stack->size);

	//push check
	stack_push(stack, "one");
	printf("%s\n", stack->top->data);
	printf("%p\n", stack->top->next);
	stack_push(stack, "two");
	printf("%s\n", stack->top->data);
	printf("%p\n", stack->top->next);

	//size
	printf("stack size: %d\n", stack_size(stack));

	//peek
	printf("top in stack: %s", stack_peek(stack)->data);
}
