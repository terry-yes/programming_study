n = [5, 7, 7]
a = [[-15, -6, 1, 3, 7],
     [-15, -4, 2, 8, 9, 13, 15],
     [-15, -4, 3, 8, 9, 13, 15]]


def binarySearch(n, a):
    start = 0
    end = n - 1
    while start <= end:
        mid = (start + end) // 2
        if mid == a[mid]:
            return mid
        elif a[mid] > mid:
            end = mid - 1
        elif a[mid] < mid:
            start = mid + 1
    return None


def solution(n, a):
    result = binarySearch(n, a)
    if result == None:
        return -1
    return result


for i in range(len(n)):
    print(solution(n[i], a[i]))
