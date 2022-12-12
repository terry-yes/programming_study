from itertools import combinations

a = ['abc', 'cdf']
temp = []
for s in a:
    combi = combinations(s, 2)
    temp += combi
print(temp)

