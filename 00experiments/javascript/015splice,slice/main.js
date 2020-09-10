let a = [2,4,6,8,0]
let b = [2,4,6,8,0]

let c = a.splice(1,2, 'hi');
let d = b.slice(1,2, 'hi');
console.log(a, c);
console.log(b,d);
