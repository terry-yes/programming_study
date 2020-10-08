import time
n, k = map(int, input().split())
cnt = 0

start_time = time.time()
while (n > 1):
	if (n % k == 0):
		n = n / k
		cnt += 1
	else:
		n -= 1
		cnt += 1
print(cnt)
end_time = time.time()
print(end_time - start_time)
		
	
