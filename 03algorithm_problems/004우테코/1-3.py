data = "I love you"


def solution(data):
	result = ""
	for i in data:
		if i >= 'A' and i <= 'Z':
			result += chr(ord('A') + ord('Z') - ord(i))
		elif i >= 'a' and i <= 'z':
			result += chr(ord('a') + ord('z') - ord(i))
		else:
			result += i
	return result
print(solution(data))
		
