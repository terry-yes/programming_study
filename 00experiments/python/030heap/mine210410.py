import heapq

h = []
heapq.heappush(h, 4)
heapq.heappush(h, 3)
heapq.heappush(h, 2)
heapq.heappush(h, 5)
print(h)
print(h[0])
a = heapq.heappop(h)
print(a)
print(h)
# b = heapq.heappushpop(h, 6)
# print('b', b)
# print(h)
# c = heapq.heappushpop(h, 2)
# print('c', c)
# print(h)
#
# print("----minheap----")
# list1 = [4, 1, 3, 2]
# heapq.heapify(list1)
# print(list1)
#
# print("----maxheap----")
# list2 = [4, 1, 3, 2]
# h = []
# for num in list2:
#     heapq.heappush(h, -num)
# while h:
#     print(-heapq.heappop(h))
#
# print("---인터넷에 있던 maxheap구현----")
# import heapq
#
# nums = [4, 1, 7, 3, 8, 5]
# heap = []
#
# for num in nums:
#   heapq.heappush(heap, (-num, num))  # (우선 순위, 값)
#
# while heap:
#   print(heapq.heappop(heap)[1])  # index 1
#
#
#
