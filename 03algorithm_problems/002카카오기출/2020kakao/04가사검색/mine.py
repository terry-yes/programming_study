from bisect import bisect_left, bisect_right

def count_range(array, left_value, right_value):
    left_index = bisect_left(array, left_value)
    right_index = bisect_right(array, right_value)
    return right_index - left_index



def solution(words, queries):
    words_by_length = [[] for _ in range(10001)]
    test = [[0]*20]
    print("test", test)
    test[0][0] = 1
    print("test", test)
    print("here", words_by_length)



words = ["frodo", "front", "frost", "frozen", "frame", "kakao"]
queries = ["fro??", "????o", "fr???", "fro???", "pro?"]
solution(words, queries)
