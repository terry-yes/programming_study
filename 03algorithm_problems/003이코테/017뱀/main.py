def matrix_printer(board):
	for row in board:
		print(row)
	print("-------------------------")
def mark_x_index_zero(board):
	for i in range(len(board)):
		for j in range(len(board[i])):
			if i == 0 or j == 0:
				board[i][j] = 'X'
	


def solution():
	size = 6
	apple = 3
	apple_location = [(3, 4), (2, 5), (5, 3)]
	move_count = 3
	move = [(3, 'D'), (15, 'L'), (17, 'D')]

	current_location = [(0,0)]
	board = [[0] * (size + 1) for _ in range(size + 1)]

	mark_x_index_zero(board)
	matrix_printer(board)


solution()

