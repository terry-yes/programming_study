let A = [-4, -1, 10, 3];
var sortedSquares = function(A) {
    let result = [];
    let l = 0;
    let r = A.length - 1;
    let p = r;

    while (l <= r) {
		console.log('l', l, 'p', p, 'r', r, A);
        if (A[l] ** 2 > A[r] ** 2) {
            result[p--] = A[l++] ** 2;
        } else {
            result[p--] = A[r--] ** 2;
        }
		console.log(result);
    }
    
    return result;
};
sortedSquares(A);

