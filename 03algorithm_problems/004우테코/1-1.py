money = 50237

def solution(money):
	unit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]
	result = [0] * len(unit)

	for i, v in enumerate(unit):
		if money > v:
			result[i] = money // v
			money = money % v
	return result

print(solution(money))

		
