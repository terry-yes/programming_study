import copy

def printMat(matrix):
    for i in range(len(matrix)):
        print(matrix[i])

# 2차원 리스트 90도 회전하기
def rotate_a_matrix_by_90_degree(a):
    n = len(a)  # 행 길이 계산
    m = len(a[0])  # 열 길이 계산
    result = [[0] * n for _ in range(m)]  # 결과 리스트
    for i in range(n):
        for j in range(m):
            result[j][n - i - 1] = a[i][j]
    return result

def zeroPadding(lock):
    n = len(lock)
    newLock = [[0] * (3 * n) for _ in range(3 * n)]
    for i in range(n):
        for j in range(n):
            newLock[i + n][j + n] = lock[i][j]
    return newLock

def checkFit(newLock):
    n = len(newLock) // 3
    for i in range(n, 2 * n):
        for j in range(n, 2 * n):
            if newLock[i][j] != 1:
                return False
    return True


def solution(key, lock):
    m = len(key)
    n = len(lock)
    printMat(lock)
    newLock = zeroPadding(lock)
    printMat(newLock)
    for i in range(n - (m - 1), 2 * n):
        for j in range(n - (m - 1), 2 * n):
            for _ in range(4):
                key = rotate_a_matrix_by_90_degree(key)
                currLock = copy.deepcopy(newLock)
                for k in range(m):
                    for l in range(m):
                        currLock[i + k][j + l] += key[k][l]
                if checkFit(currLock):
                    return True
    return False



key = [[0, 0, 0], [1, 0, 0], [0, 1, 1]]
lock = [[1, 1, 1], [1, 1, 0], [1, 0, 1]]
print(solution(key, lock))

# # 자물쇠의 중간 부분이 모두 1인지 확인
# def check(new_lock):
#     lock_length = len(new_lock) // 3
#     for i in range(lock_length, lock_length * 2):
#         for j in range(lock_length, lock_length * 2):
#             if new_lock[i][j] != 1:
#                 return False
#     return True
#
#
#
# def solution(key, lock):
#     n = len(lock)
#     m = len(key)
#     # print(key)
#     # print(rotate_a_matrix_by_90_degree(key))
#     # print(rotate_a_matrix_by_90_degree(rotate_a_matrix_by_90_degree(key)))
#     printMat(lock)
#     # 자물쇠의 크기를 기존의 3배로 변환
#     new_lock = [[0] * (n * 3) for _ in range(n * 3)]
#     # 새로운 자물쇠의 중앙 부분에 기존의 자물쇠 넣기
#     for i in range(n):
#         for j in range(n):
#             new_lock[i + n][j + n] = lock[i][j]
#     printMat(new_lock)
#
#     # 4가지 방향에 대해서 확인
#     for rotation in range(4):
#         key = rotate_a_matrix_by_90_degree(key)  # 열쇠 회전
#         for x in range(n * 2):
#             for y in range(n * 2):
#                 # 자물쇠에 열쇠를 끼워 넣기
#                 for i in range(m):
#                     for j in range(m):
#                         new_lock[x + i][y + j] += key[i][j]
#                 print("---------------------")
#                 printMat(new_lock)
#                 # 새로운 자물쇠에 열쇠가 정확히 들어 맞는지 검사
#                 if check(new_lock) == True:
#                     return True
#                 # 자물쇠에서 열쇠를 다시 빼기
#                 for i in range(m):
#                     for j in range(m):
#                         new_lock[x + i][y + j] -= key[i][j]
#     return False
#
#
# # key = [[0, 0, 0], [1, 0, 0], [0, 1, 1]]
# # lock = [[1, 1, 1], [1, 1, 0], [1, 0, 1]]
# key = [[0, 0, 0, 0], [1, 0, 0, 0], [0, 1, 1, 0], [0, 1, 0, 0]]
# lock = [[1, 1, 1], [1, 1, 0], [1, 0, 1]]
# print(solution(key, lock))
