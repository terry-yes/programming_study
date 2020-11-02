A = [True, True, False, False]
B = [True, False, True, False]

for i in range(4):
	print('!A || !B:', not A[i] or not B[i], '!(A && B)', not (A[i] and B[i]))
