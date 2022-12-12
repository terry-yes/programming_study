data = dict()
data['사과'] = 'Apple'
data['바나나'] = 'Banana'
data['코코넛'] = 'Coconut'

print(data)

if '사과' in data:
	print('사과 in data')

if '사과' in data.keys():
	print('keys()에 사과가 있습니다.')

if 'Apple' in data.values():
	print('values()에 Apple이 있습니다')
