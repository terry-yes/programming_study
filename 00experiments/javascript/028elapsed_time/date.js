let startTime = new Date();

let b = 0;
for (let i = 0; i < 1000; i++) {
	b += i*i*i;
}
let endTime = new Date();
console.log(endTime - startTime)
