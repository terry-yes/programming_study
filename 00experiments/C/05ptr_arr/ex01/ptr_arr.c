#include <stdio.h>

int	main(void)
{
	int		arr1[1][2];

	//arr1[0] = {1, 2}; 실패
	arr1[0][0] = 1;
	arr1[0][1] = 2;
	printf("arr1: %d %d\n", arr1[0][0], arr1[0][1]);
	printf("arr1[0] address: %p\n arr2[1] address: %p\n", arr1[0], arr1[1]);
	printf("arr1[0] address: %p\n arr2[0]+1 address: %p\n", arr1[0], arr1[0] + 1);

	//*arr2[0] = 1; seg fault
	//arr2[0][0] = 1; seg fault
	int		*arr2[2];
	int n1;
	int	n2;

	printf("arr2[0] address: %p\n", arr2[0]);
	printf("arr2[0] address: %p\n", arr2[0] + 1);
	printf("arr2[1] address: %p\n", arr2[1]);
	n1 = 1;
	arr2[0] = &n1;
	printf("arr2: %d\n", *arr2[0]); //둘다 위에서 안됐는데 포인터가 생기니까 출력됨
	printf("arr2: %d\n", arr2[0][0]);
	printf("arr2[0] address: %p\n", arr2[0]);

	int		(*arr3)[3];
	int		test[2][3] = {{1,2,3}, {4,5,6}};
	
	arr3 = test;
	printf("arr3[0][1]: %d\n", arr3[0][1]);
	printf("arr3[1][2]: %d\n", arr3[1][2]);


	int		**arr4;
}
