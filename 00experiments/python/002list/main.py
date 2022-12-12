li = [1, 1, 2, 3, 4, 5]
print(li)
print(type(li))
print(dir(li))

li.append('a') # [1, 1, 2, 3, 4, 5, 'a']
# append = push
print(li)

print(li.count(1)) #2

li.extend([11, 22])
print(li) #[1, 1, 2, 3, 4, 5, 'a', 11, 22]
# extend = concat

print(li.index(1)) # 0
# index = indexOf

#pop() = pop
#argument 없으면 맨뒤에꺼 삭제, 값이 있으면 해당 번째 삭제

li.insert(1, 3000) #[1, 3000, 1, 2, 3, 4, 5, 'a', 11, 22]
#insert(몇번째, 값)
print(li)

li.remove(100)
# 처음 만나는 100을 지움

#reverse() = reverse

#sort() = sort()


#sorte(), reversed()도 있는데 이거는 원 리스트는 놔두고 새로운 리턴을 만들어
