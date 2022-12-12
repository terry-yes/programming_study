l = [i for i in range(10)]
print(l)

for i in range(2, 10):
	for  j in range(1, 10):
		print('{} X {} = {}'.format(i, j, i*j));

ll = ['{} X {} = {}'. format(i, j, i*j) for i in range(2, 10) for j in range(1, 10)]
print(ll)
