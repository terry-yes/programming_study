console.time("loop");
let b = 0;
for (i = 0; i < 100000; i++) {
	b += i;
}
console.timeEnd("loop");
