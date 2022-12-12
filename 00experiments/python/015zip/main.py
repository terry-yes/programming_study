a = ("John", "Charles", "Mike")
b = ("Jenny", "Christy", "Monica")

x = zip(a, b)

a = tuple(x)
for key in a:
    print(key)

