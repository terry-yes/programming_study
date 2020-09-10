let obj = {
	key1 : 'val1',
	key2 : 'val2',
};

//이거가 순서 보장되는듯
for (let key in obj){
	console.log(obj[key]);
}
console.log(obj.length);
//이거는 순서가 보장 안됨
for (let [key, value] of Object.entries(obj)){
	console.log(`${key}: ${value}`);
}
console.log(obj.key1);
