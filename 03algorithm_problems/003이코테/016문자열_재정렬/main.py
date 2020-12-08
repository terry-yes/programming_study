#string = input()
string = ["K1KA5CB7", "AJKDLSI412K4JSJ9D"]
answer = ["ABCKK13", "ADDIJJJKKLSS20"]

def solution(string):
	temp_string = ""
	temp_number = 0
	for c in string:
		if c.isdigit():
			temp_number += int(c)
		else:
			temp_string += c
	sorted_list = sorted(temp_string)
	#return sorted(list(temp_string)) + str(temp_number)
	#return ''.join(map(str, sorted_list)) + str(temp_number)
	return ''.join(sorted_list) + str(temp_number)
	
	
	





for i in range(len(string)):
	print(solution(string[i]))
	print(answer[i])
