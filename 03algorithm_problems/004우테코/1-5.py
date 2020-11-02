data = 33

def count369(n):
	result = 0
	while n > 0:
		if (n % 10) % 3 == 0 and n % 10 != 0:
			result += 1
		n = n // 10
	return result

def solution(n):
	result = 0
	for i in range(1, n + 1):
		result += count369(i)
	return result

print(solution(data))


