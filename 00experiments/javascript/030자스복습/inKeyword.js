let a = [3, 2, 1]
let b = {a: 11, b: 22, c: 33}
// for (let c of a) {
//   console.log(c)
// }
// for (let c in a) {
//   console.log(c)
// }

// for (let c in b) {
//   console.log(c)
// }

q=Object.keys(b)
console.log(q)
w =Object.values(b)
console.log(w)
e =Object.entries(b)
console.log(e)

if (q.includes('a')) {
  console.log('hi')
}

console.log(a.reverse())