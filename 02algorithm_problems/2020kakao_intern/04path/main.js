let board = [[0,0,0],[0,1,0],[0,1,0]];
function path(board, i, j, n){
    if (i > n || j > n || i < 0 || j < 0) {
        return false;
    }
    if (i == n && j == n) {
        console.log(board);
        return true;
    }
    if (board[i][j] == 1 || board[i][j] == 2) {
        return false;
    }
    board[i][j] == 2;
    if (path(board, i-1,j,n) || path(board, i+1,j,n) || path(board, i, j-1,n) || path(board, i, j+1,n)) {
        return true;
    }
    board[i][j] = 0;
    return false;
}
function solution(board) {
    var answer = 0;
    let n = board.length;
    
    path(board, 0, 0, n);
    
    return answer;
}
solution(board);
