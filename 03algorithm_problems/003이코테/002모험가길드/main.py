N = 5
input1 = [1, 2, 3, 3, 3, 4]

input1.sort()
result = 0
count = 0
for i in input1:
	count += 1
	if i <= count:
		print('i', i)
		result += 1
		count = 0
print(result)



