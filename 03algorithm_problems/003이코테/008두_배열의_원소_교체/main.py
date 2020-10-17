N = 5
K = 3
A = [1, 2, 5, 4, 3]
B = [5, 5, 6, 6, 5]


def count_sort(array, order):
	hash = [0] * (max(array) + 1)
	for i in array:
		hash[i] += 1
	result = []
	for i in range(len(hash)):
		while hash[i] > 0:
			if order == 1:
				result.append(i)
			elif order == 2:
				result.insert(0, i)
			hash[i] -= 1
	print(result)


count_sort(A, 1)
count_sort(B, 2)

for i in range(K):
	if A[i] < B[i]:
		A[i], B[i] = B[i] , A[i]

print(A)
print(B)
print(sum(A))
