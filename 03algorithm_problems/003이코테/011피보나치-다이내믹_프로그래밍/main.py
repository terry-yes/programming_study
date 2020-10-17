import time
#다이나믹 프로그래밍으로 짜봤는데 오히려 느림
def fibonacchi(num, di):
	if len(di) == 0:
		di = {0: 0, 1: 1}
	if num in di.keys():
		return di[num]
	else:
		return fibonacchi(num - 1, di) + fibonacchi(num - 2, di)


number = 50
start = time.time()
print('fast', fibonacchi(number, {}))
end = time.time()
print('fast elapsed time:', end - start)


#기본적인 fibonacchi함수
def fibo(num):
	if num == 0 or num == 1:
		return num
	return fibo(num - 1) + fibo(num - 2)

start = time.time()
print('slow', fibo(number))
end = time.time()
print('slow elapsed time:', end - start)

d = [0] * 100

def fibo2(x):
	if x == 1 or x == 2:
		return 1
	if d[x] != 0:
		return d[x]
	d[x] = fibo(x - 1) + fibo(x - 2)
	return d[x]
	

start = time.time()
print('fast2', fibo2(number))
end = time.time()
print('fast2 elapsed time:', end - start)

