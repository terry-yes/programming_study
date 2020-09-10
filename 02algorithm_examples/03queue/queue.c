#include <stdio.h>
#include <stdlib.h>

//200531 잘만든거 같은데 출력결과가 33으로 1이 나오지 않음 수정해야함
typedef struct	s_node
{
	int				data;
	struct s_node	*next;
}				t_node;

void	push(t_node **queue, int data)
{
	t_node	*new;
	t_node	*curr;

	new = malloc(sizeof(t_node));
	new->next = NULL;
	new->data = data;
	if (*queue == NULL)
		*queue = new;
	else
	{
		curr = *queue;
		while (curr->next)
			curr = curr->next;
		curr->next = new;
	}

}

void	print_queue(t_node *queue)
{
	t_node	*curr;

	curr = queue;
	while (curr)
	{
		printf("%d ", queue->data);
		curr = curr->next;
	}
}

int		main(void)
{
	t_node	*queue;

	queue = NULL;
	push(&queue, 3);
	push(&queue, 1);
	print_queue(queue);
}
