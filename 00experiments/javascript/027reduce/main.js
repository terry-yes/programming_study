let arr = [1, 2, 3, 4]

const result1 = arr.reduce((accumulator, currentValue) => {
	console.log('acc:', accumulator, 'curr:', currentValue);
	return (accumulator + currentValue);

});
console.log('result1', result1);

const result2 = arr.reduce((accumulator, currentValue) => {
	console.log('acc:', accumulator, 'curr:', currentValue);
	return (accumulator + currentValue);
}, 10);

console.log('result2', result2);

const result3 = arr.reduce((accumulator, currentValue, currentIndex, array) => {
	console.log('acc:', accumulator, 'curr:', currentValue, 'currIdx:', currentIndex, 'array:', array);
	return (accumulator + currentValue);

});
console.log('result3', result3);
