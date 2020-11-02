N = 9
data = [1, 3, 1, 5, 4, 1, 1, 3, 10]
#print(list(map(int, input().split(' '))))


d = [0] * N

print(d)
d[0] = data[0]
d[1] = max(data[0], data[1])

for i in range(2, len(data)):
	d[i] = max(d[i - 1], d[i - 2] + data[i])

print(d)
