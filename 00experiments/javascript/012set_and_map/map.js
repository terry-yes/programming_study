let map = new Map();
map.set('1', 'str1');
map.set(1, 'num1');
map.set(true, 'bool1');

console.log(map.get(1));
console.log(map.get('1'));
console.log(map.has('1'));
map.delete('1');
console.log(map);
map.clear();
console.log(map);
console.log(map.size);

map.set('2', 'str2')
	.set(2, 'num2')
	.set(true, 'bool2');
console.log(map)

console.log('---------------------------');
let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);

// 키(vegetable)를 대상으로 순회합니다.
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // cucumber, tomatoes, onion
}

// 값(amount)을 대상으로 순회합니다.
for (let amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}

// [키, 값] 쌍을 대상으로 순회합니다.
for (let entry of recipeMap) { // recipeMap.entries()와 동일합니다.
  console.log(entry)
  console.log(entry[0])
}
