from collections import defaultdict

def solution(logs):
    answer = []
    table = {}
    for log in logs:
        name, question, score = log.split(" ")
        if name not in table:
            table[name] = {}
        if question not in table[name]:
            table[name][question] = score
        else:
            if int(table[name][question]) < int(score):
                table[name][question] = score
    newTable = {}
    for name in table.keys():
        if len(table[name]) >= 5:
            newTable[name] = table[name]
    stringInfo = {}
    for name in newTable:
        for question in sorted(newTable[name].keys()):
            if name not in stringInfo:
                stringInfo[name] = ""
            stringInfo[name] += question + newTable[name][question]

    flipped = {}
    for key, value in stringInfo.items():
        if value not in flipped:
            flipped[value] = [key]
        else:
            flipped[value].append(key)
    for group in flipped:
        if len(flipped[group]) > 1:
            answer += sorted(flipped[group])
    print(answer)
    if len(answer) == 0:
        return ["None"]
    else:
        return answer









#     answer = []
#     table = defaultdict(str)
#     logs = sorted(logs)
#     newlog = []
#     for log in logs:
#         newlog.append(log.split(' '))
#     print('here', newlog)
#     prev = [-1, -1]
#     for i in range(0, len(newlog)):
#         print(prev, newlog[i])
#         if prev[0] == newlog[i][1] and prev[1] == newlog[i][2]:
#             print("hi")
#             if int(prev[1]) > int(newlog[i][1, 2]):
#                 table[newlog[i][0]] += prev[0] + prev[1]
#             else:
#                 table[newlog[i][0]] += newlog[i][1] + newlog[i][2]
#                 prev = [newlog[i][1], newlog[i][2]]
#         else:
#             table[newlog[i][0]] += newlog[i][1] + newlog[i][2]
#             prev = [newlog[i][1], newlog[i][2]]
#     print(table)
#     return answer
solution(["0001 3 95", "0001 5 90", "0001 5 100", "0002 3 95", "0001 7 80", "0001 8 80", "0001 10 90", "0002 10 90", "0002 7 80", "0002 8 80", "0002 5 100", "0003 99 90"])
