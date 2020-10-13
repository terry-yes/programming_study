from collections import deque

# # N, M을 공백을 기준으로 구분하여 입력 받기
# n, m = map(int, input().split())
# # 2차원 리스트의 맵 정보 입력 받기
# graph = []
# for i in range(n):
#     graph.append(list(map(int, input())))

n = 4
m = 5
graph = [[1, 0, 1, 0, 1, 0], [1, 1, 1, 1, 1, 1],[0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]];

# 이동할 네 가지 방향 정의 (상, 하, 좌, 우)
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def bfs(x, y):
	queue = deque()
	queue.append((x, y))

	while queue:
		x, y = queue.popleft()

		for i in range(4):
			nx = x + dx[i]
			ny = y + dy[i]
			if nx < 0 or nx > n or ny < 0 or ny > m:
				continue
			if graph[nx][ny] == 0:
				continue
			if graph[nx][ny] == 1:
				graph[nx][ny] = graph[x][y] + 1
				queue.append((nx, ny))
	return graph[nx][ny] - 1


a = bfs(0, 0)
print(a)
