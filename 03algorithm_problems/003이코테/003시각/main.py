data = 3

result = 0
hour = 0
min = 0
sec = 0


def is3(num):
	while num > 0:
		if num % 10 == 3:
			return True
		num = num // 10
	return False


while True:
	if is3(hour) or is3(min) or is3(sec):
		result += 1
	sec += 1
	if sec == 60:
		sec = 0
		min += 1
		if min == 60:
			min = 0
			hour += 1
			if hour == data + 1:
				break
	print(hour, ':', min, ':', sec)


print(result)
