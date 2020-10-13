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
	if x == n - 1 and y == m - 1:
		return 0
	if x < 0 or x > n or y < 0 or y > m:
		return 0



a = bfs(0, 0)
print(a)
