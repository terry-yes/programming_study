print('-----None------')
x = None
if x:
	print('if x')
if x is not None:
	print('if x is not None')
	

print('-----[]------')
x = []
if x:
	print('if x')
if x is not None:
	print('if x is not None')


print('-----42------')
x = 42
if x:
	print('if x')
if x is not None:
	print('if x is not None')
a = []
b= None
a.append(b)
print('here', a)
c = a.pop()
print(c)
print(type(c))
