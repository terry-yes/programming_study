def divideUV(p):
    stack = 0
    for i in range(len(p)):
        if p[i] == '(':
            stack += 1
        else:
            stack -= 1
        if i != 0 and stack == 0:
            return [p[0: i + 1], p[i + 1:]]
    return [p, ""]


def isRightString(u):
    stack = 0
    for i in range(len(u)):
        if u[i] == '(':
            stack += 1
        else:
            if stack == 0:
                return False
            stack -= 1
    print("stack", stack)
    return True


def inverseAndDeleteEachEnd(u):
    deletedEachEnd = u[1:len(u) - 1]
    newString = ""
    for i in deletedEachEnd:
        if i == '(':
            newString += ')'
        else:
            newString += '('
    return newString


def solution(p):
    [u, v] = divideUV(p)
    if isRightString(u):
        if v == "":
            return u
        return u + solution(v)
    return "(" + solution(v) + ")" + inverseAndDeleteEachEnd(u)


input = [
    "(()())()",
    ")(",
    "()))((()"
]

for i in range(len(input)):
    print(solution(input[i]))

print(solution(input[1]))
