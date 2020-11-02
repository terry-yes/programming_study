def isValid(scoreArr):
	if len(scoreArr) != 2:
		return False
	if scoreArr[0] < 1 or scoreArr[1] > 400:
		return False
	if scoreArr[0] % 2 != 1:
		return False
	if scoreArr[0] + 1 != scoreArr[1]:
		return False
	return True

def getScore(number):
	sum = 0
	mutiple = 1
	while number > 0:
		unit = number % 10
		sum += unit
		mutiple *= unit
		number = number // 10
	return max(sum, mutiple)

def solution(pobi, crong):
	if isValid(pobi) == False or isValid(crong) == False:
		return -1
	pobiScore = max(getScore(pobi[0]), getScore(pobi[1]))
	crongScore = max(getScore(crong[0]), getScore(crong[1]))
	if pobiScore > crongScore:
		return 1
	elif pobiScore > crongScore:
		return 2
	else:
		return 0

print(solution([97, 98], [197, 198]))
print(solution([131, 132], [211, 212]))
print(solution([99, 102], [211, 212]))

