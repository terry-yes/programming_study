d = [0] * 1001
n = int(input())
divider = 10007


for i in range(1, n + 1):
	if i == 1:
		d[i] = 1
	elif i == 2:
		d[i] = 2
	else:
		d[i] = ((d[i - 1] % divider) + (d[i - 2] % divider)) % divider

print(d[n] % 10007)
