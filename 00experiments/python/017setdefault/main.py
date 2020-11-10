test1 = {1 : 'a', 2 : 'b'}
print(test1)
test1.setdefault(3)
print(test1)

test2 = {1 : 'a', 2 : 'b'}
print(test2)
test2.setdefault(3, 'c')
print(test2)

test3 = {1 : 'a', 2 : 'b', 3: 'ddd'}
print(test3)
test3.setdefault(3, 'c')
print(test3)


test4 = {}
if not 'key' in test4:
	test4['key'] = []
test4['key'].append('a')
print(test4)

test5 = {}
test5.setdefault('key', [])
test5['key'].append('a')
print(test5)
