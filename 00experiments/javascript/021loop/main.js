let str = 'hello';
for (let i = 0; i < str.length; i++) {
  let c = str[i]
  console.log(c)
}

str.split('').forEach(v => {
  console.log(v);
})

let arr = [1,3,2,5,'hello'];
arr.forEach(v => {
  console.log(v);
})

arr.map(v => {
  console.log(v);
})

for (const [r, i] of arr.entries()) {
	console.log(r, i);
}

let obj = {
  user: 'kiddo',
  age: 3,
  weight: 8,
}
for (const key of Object.keys(obj)) {
  console.log('key', key);
}

for (const value of Object.values(obj)) {
  console.log('value', value);
}

for (const [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`);
}
