import re

totalTicket = 2000

logs = [
	"woni request 09:12:29",
	"brown request 09:23:11",
	"brown leave 09:23:44",
	"jason request 09:33:51",
	"jun request 09:33:56",
	"cu request 09:34:02"
]

def solution(logs):
	#print(logs)
	for i in logs:
		name, state, time = i.split(" ")
		print(name, state, time)

solution(logs)
#print(logs)
