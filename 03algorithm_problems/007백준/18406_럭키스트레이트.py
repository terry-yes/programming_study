number = input()
numberLen = len(number)
sum = 0

for i in range(numberLen // 2):
	sum += int(number[i])
for i in range(numberLen // 2, numberLen):
	sum -= int(number[i])
if sum == 0:
	print("LUCKY")
else:
	print("READY")
	
