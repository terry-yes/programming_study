const object1 = {
  key1: 'value1',
  key2: 'value2',
}

for (const key of Object.keys(object1)){
  console.log('key', key);
}

for (const key in object1) {
  console.log('key', key);
}