class Node:
	def __init__(self, data):
		self.value = data
		self.next = None

class LinkedList:
	def __init__(self):
		self.start = None
	
	def insert(self, data):
		new = Node(data)
		new.next = self.start
		self.start = new
		
		

	def traverse(self):
		if self.start is None:
			print("List has no element")
			return 
		else:
			curr = self.start
			while curr is not None:
				print(curr.value, " ")
				curr = curr.next
	def delete(self):

        

list  = LinkedList()
list.insert('hi')
list.insert('hello')
list.traverse()
