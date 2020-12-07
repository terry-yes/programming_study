from bisect import bisect_right, bisect_left


def count_range(array, left_value, right_value):
    left_index = bisect_left(array, left_value)
    right_index = bisect_right(array, right_value)
    return right_index - left_index


def solution(words, queries):
    words_by_length = [[] for _ in range(10001)]
    words_by_length_reverse = [[] for _ in range(10001)]
    result = []

    for word in words:
        words_by_length[len(word)].append(word)
        words_by_length_reverse[len(word)].append(word[::-1])
    for group in words_by_length:
        group.sort()
    for group in words_by_length_reverse:
        group.sort()

    for query in queries:
        if query[-1] == '?':
            result.append(count_range(words_by_length[len(query)], query.replace('?', 'a'), query.replace('?', 'z')))
        elif query[0] == '?':
            result.append(count_range(words_by_length_reverse[len(query)], query.replace('?', 'a')[::-1],
                                      query.replace('?', 'z')[::-1]))
        else:
            result.append(1 if count_range(words_by_length[len(query)]).contains(query) else 0)
    return result


words = ["frodo", "front", "frost", "frozen", "frame", "kakao"]
queries = ["fro??", "????o", "fr???", "fro???", "pro?"]
solution(words, queries)
