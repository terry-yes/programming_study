N = 4
M = 6

cakes = [19, 15, 10, 17]

start = 0
end = max(cakes) - 1
result = 0
while start <= end:
    total = 0
    mid = (start + end) // 2
    for cake_length in cakes:
        if cake_length > mid:
            total += cake_length - mid
    if total >= 6:
        result = mid
        start = mid + 1
    else:
        end = mid - 1
print(result)


	
