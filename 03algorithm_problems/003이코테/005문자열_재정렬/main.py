data = 'K1KA5CB7'

num = 0
result = ''
for c in data:
    if '0' < c < '9':
        num += int(c)
    else:
        result += c
# print(type(result))
print("".join(sorted(result)) + str(num))

