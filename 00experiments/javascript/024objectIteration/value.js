const object1 = {
  key1: 'value1',
  key2: 'value2',
}
for (const value in Object.values(object1)){
  console.log('value', value);
}