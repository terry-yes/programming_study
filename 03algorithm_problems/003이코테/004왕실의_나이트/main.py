data = 'b3'

col, row = list(data)
col = "abcdefgh".find(col) + 1

dx = [2, -2, 2, -2, 1, -2, 1, -2]
dy = [1, 1, -1, -1, 2, 2, -2, -2]

result = 0
for i in range(len(dx)):
	X, Y = int(col) + dy[i], int(row) + dx[i]
	print(X, Y)
	if X > 8 or X < 1 or Y > 8 or Y < 1:
		continue
	result += 1

print(result)


