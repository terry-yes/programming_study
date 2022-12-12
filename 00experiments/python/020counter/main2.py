

s = "aabbaccc"
#방법1
from collections import defaultdict
result1 = defaultdict(int)
for c in s:
    result1[c] += 1
print(result1)
print(dict(result1))

#방법 2
result2 = dict()
for c in set(s):
    result2[c] = s.count(c)
print(result2)

#방법3
from collections import Counter
result3 = Counter(s)
print(result3)
print(dict(result3))

