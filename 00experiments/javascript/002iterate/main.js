//map은 배열만 가능
const a = ['apple', 'banana', 'cider'];

a.map((a,i)=>{
	console.log(a,i);
});

const obj = {
	key1 : 'val1',
	key2 : 'val2',
	key3 : 'val3',
	key4 : 'val4',
};

//object에서 반복문 돌리는 두가지 방법
for (let [key, value] of Object.entries(obj)) {
	console.log(key, value);
}

for (const property in obj) {
	console.log(property);
	console.log(obj[property]);
}
