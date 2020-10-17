import math

N = 4
M = 6

li = [19, 15, 10, 17]
cut_length = [0] * N

def cuttingDdeok(li, length):
	cutDdeok = 0
	for i in li:
		if i > length:
			cutDdeok += i - length
	return cutDdeok

i = max(li)/2
result = 0
while True:
	if cuttingDdeok(li, i) >= M:
		i = math.floor((max(li) + i)/2)
	else:
		result = i
		break

print(result)
	
