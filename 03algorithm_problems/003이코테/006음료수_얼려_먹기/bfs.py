# dfs와 코드 똑같음 bfs용으로 다시 만들어야함
# n, m = map(int, input().split())
# graph = []
# for i in range(n):
# 	graph.append(list(map(int, input())))

def dfs(i, j):
	if i < 0 or i >= n or j < 0 or j >= m:
		return False
	if graph[i][j] == 1:
		return False
	graph[i][j] = 1
	dfs(i + 1, j)
	dfs(i - 1, j)
	dfs(i, j + 1)
	dfs(i, j - 1)
	return True

n = 4
m = 5
graph = [[0, 0, 1, 1, 0], [0, 0, 0, 1, 1],[1, 1, 1, 1, 1],[0, 0, 0, 0, 0]];
print(graph)

result = 0
for i in range(n):
	for j in range(m):
		if dfs(i, j):
			result += 1
print(graph)
print(result)

