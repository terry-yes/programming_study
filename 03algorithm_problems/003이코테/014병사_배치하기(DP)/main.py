N = 7
data = [15, 11, 4, 8, 5, 2, 4]
d = [0] * N
d[0] = 1

for i in range(1, N):
	for j in range(i):
		print('i:',i,'j:',j)
		print('data[j]', data[j],'data[i]',data[i])
		if data[j] > data[i]:
			d[i] = max(d[j] + 1, d[i])
print(max(d))
			
	
	
	
