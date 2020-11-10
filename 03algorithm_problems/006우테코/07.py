def move(currMove, currTime, i, j, answer):
    direction = {'right': [0, 1, 1],
                 'down': [1, 0, 1],
                 'upDigo': [-1, 1, 2],
                 'downDigo': [1, -1, 2]}
    i += direction[currMove][0]
    j += direction[currMove][1]
    currTime += direction[currMove][2]
    answer[i][j] = currTime
    return i, j, currTime


def solution(n, horizontal):
    answer = [[0] * n for _ in range(n)]

    if n == 1:
        return [[0]]

    currTime = 0

    currMove = 'right' if horizontal == Ture else "down"
    i, j, currTime = move(currMove, 0, 0, 0, answer)
    wallMoving = 1
    headingFor = 'up' if currMove == 'right' else 'down'

    while 0 <= i < n and 0 <= j < n:

    # while 0 <= i < n and 0 <= j < n:
    #     if currTime == 0:
    #         if horizontal == True:
    #             currMove = 0
    #             i, j, currTime = move(currMove, currTime, i, j, answer)
    #             if i == n - 1 and j == n - 1:
    #                 break
    #             currMove = 3
    #             i, j, currTime = move(currMove, currTime, i, j, answer)
    #             isUpDirection = 0
    #         else:
    #             currMove = 1
    #             i, j, currTime = move(currMove, currTime, i, j, answer)
    #             if i == n - 1 and j == n - 1:
    #                 break
    #             currMove = 2
    #             i, j, currTime = move(currMove, currTime, i, j, answer)
    #             isUpDirection = 0
    #     elif i != 0 and i != n - 1 and j != 0 and j != n - 1:
    #         if isUpDirection == 0:
    #             currMove = 3
    #             i, j, currTime = move(currMove, currTime, i, j, answer)
    #         else:
    #             currMove = 2
    #             i, j, currTime = move(currMove, currTime, i, j, answer)
    #     else:
    #         if j == 0 and i + 1 < n:
    #             currMove = 1
    #             i, j, currTime = move(currMove, currTime, i, j, answer)
    #             if i == n - 1 and j == n - 1:
    #                 break
    #             currMove = 2
    #             i, j, currTime = move(currMove, currTime, i, j, answer)
    #             isUpDirection = 1
    #         elif (j == 0 and i + 1 >= n) or i == n - 1:
    #             currMove = 0
    #             i, j, currTime = move(currMove, currTime, i, j, answer)
    #             if i == n - 1 and j == n - 1:
    #                 break
    #             currMove = 2
    #             i, j, currTime = move(currMove, currTime, i, j, answer)
    #             isUpDirection = 1
    #         if i == 0 and j + 1 < n:
    #             currMove = 0
    #             i, j, currTime = move(currMove, currTime, i, j, answer)
    #             if i == n - 1 and j == n - 1:
    #                 break
    #             currMove = 3
    #             i, j, currTime = move(currMove, currTime, i, j, answer)
    #             isUpDirection = 0
    #         elif (i == 0 and j + 1 >= n) or j == n - 1:
    #             currMove = 1
    #             i, j, currTime = move(currMove, currTime, i, j, answer)
    #             if i == n - 1 and j == n - 1:
    #                 break
    #             currMove = 3
    #             i, j, currTime = move(currMove, currTime, i, j, answer)
    #             isUpDirection = 0
    print(answer)
    return answer
solution(4, True)
