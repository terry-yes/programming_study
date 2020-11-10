import json
with open('./test-22.json') as f:
	data = json.load(f)

s, x = data["input"]['s'], data["input"]['x']

def strstr(s, x):
     if s == "" and x == "":
         return 0
     if s== "":
         return -1
     if x == "":
         return 0
     for i in range(len(s)):
         if s[i] == x[0]:
             j = 0
             while i + j < len(s) and j < len(x):
                 if s[i + j] != x[j]:
                     break
                 j += 1
             if j == len(x):
                 return i
     return -1
#print(strstr(s, x))

def strstr1(s, x):
    if x not in s:
        return -1

    length = len(x)

    for i in range(len(s)):
        if s[i: len(x) + i] == x:
            return i

    return -1

print(len(s))
print(len(x))
#print('mine', strstr(s, x))
print('answer', strstr1(s, x))
