def hi(a,b,c):
	return 1,2,3

a,b,c = hi(1,2,3)
print(a, b, c, )

test = [[1,2,3],[4,5,6]]
def hihi(test):
	test[1][1] += 1000
hihi(test)
print(test)
