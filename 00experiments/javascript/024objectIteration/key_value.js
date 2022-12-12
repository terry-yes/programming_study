const object1 = {
  key1: 'value1',
  key2: 'value2'
};

for (const [key, value] of Object.entries(object1)) {
  console.log('key', key, 'value', value);
}