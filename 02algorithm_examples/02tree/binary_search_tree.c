 #include <stdlib.h>

 typedef struct	s_node
 {
 	void		*data;
 	struct s_node	*left;
 	struct s_node	*right;
 }				t_node;

 typedef struct	s_binary_search_tree
 {
 	t_node	*root;
 	int	(*cmp)(void *, void *);
 	int	size;
 }				t_tree;

int cmp(void *a, void *b)
{
	return (*(int *)a - *(int *)b);
}	

t_tree *tree_init(int (*cmp)(void *, void *))
{
	t_tree	*tree;

	if (!cmp || (tree = malloc(sizeof(t_tree))))
		return (NULL);
	tree->root = NULL;
	tree->cmp = cmp;
	tree->size = 0;
	return (tree);
}

t_node *create_elem(void *data)
{
	t_node	*node;

	node = malloc(sizeof(t_node));
	if (!node)
		return (NULL);
	node->data = data;
	node->left = NULL;
	node->right = NULL;
	return (node);
}

int	tree_size(t_tree *tree);
{
	if (!tree)
		return (0);
	return (tree->size);
}

//t_node *tree_find(t_tree *tree, void *data_ref)

int tree_insert(t_tree *tree, void *data);
{
	t_node	*new;
	t_node	*curr;
	t_node	*prev;
	int		cmp_result;

	if (!tree)
		return (0);
	curr = tree->root;
	while (curr)
	{
		cmp_result = tree->cmp(curr->data, data);
	}
}

int		main(void)
{
	t_tree *tree;

	tree = tree_init(cmp);
}
