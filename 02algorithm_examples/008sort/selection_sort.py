array = [1, 3, 8, 4, 6, 3, 2]

for i in range(2, len(array)):
	for j in range(i, 0, -1):
		if array[j - 1] > array[j]:
			array[j - 1], array[j] = array[j], array[j - 1]
		else:
			break

print(array)
	
