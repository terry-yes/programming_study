data = "browoanoommnaon"

def decipher(data):
	while True:
		new = ""
		i = 0
		while i < len(data):
			if i == len(data) - 1:
				new += data[i]
				data = new
				i += 1
			if data[i] != data[i + 1]:
				new += data[i]
				i += 1
			else:
				i += 2
	print(data)	

decipher(data)

		
