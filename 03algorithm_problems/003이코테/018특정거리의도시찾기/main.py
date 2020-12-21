from collections import deque

n = 4
m = 4
k = 2
x = 1

dic = {1: [2, 3], 2 : [1, 3, 4], 3: [1, 2], 4: [2]}
print(dic)

distance = [-1] * (n + 1)
distance[x] = 0

q = deque(dic[x])
while(q):
	now = q.popleft()
	for next_node in dic[q]:
		if distance[next_node] == -1:
			distance[next_node] = distance[now] + 1
		q.append(next_node)

for i in range(1, n + 1):
	if distance[i] == k:
		print(i)
