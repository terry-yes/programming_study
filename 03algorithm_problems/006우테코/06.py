def solution(logs):
	answer = []
	table = {}
	for i in logs:
		person, problem, score = i.split(" ")
		if person not in table:
			table[person] = {}
		if problem not in table[person]:
			table[person][problem] = score
		elif int(table[person][problem]) < int(score):
			table[person][problem] = score
	candidate = {}
	for i in table:
		if len(table[i]) >= 5:
			candidate[i] = table[i]
	candidateString = {}
	for person in candidate:
		for problem in sorted(candidate[person].keys()):
			if person not in candidateString:
				candidateString[person] = ''
			candidateString[person] += problem + candidate[person][problem]
	print(candidateString)

	flipped = {}
	for key, value in candidateString.items():
		if value not in flipped:
			flipped[value] = [key]
		else:
			flipped[value].append(key)
	print(flipped)
	for i in flipped:
		if len(flipped[i]) > 1:
			answer += sorted(flipped[i])
	print(answer)
	if len(answer) == 0:
		return ["None"]
	return answer


solution(["0001 3 95", "0001 5 90", "0001 5 100", "0002 3 95", "0001 7 80", "0001 8 80", "0001 10 90", "0002 10 90","0002 7 80", "0002 8 80", "0002 5 100", "0003 99 90"])

