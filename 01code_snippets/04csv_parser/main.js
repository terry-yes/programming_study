const parse = require('csv-parse/lib/sync');
const stringify = require('csv-stringify/lib/sync');
const fs = require('fs');

const csv = fs.readFileSync('./test.csv');
const parsedcsv = parse(csv.toString('utf-8'));
let result =[];
for (const [i, r] of parsedcsv.entries()) {
  result[i] = new Array(2);
  result[i][0] = r[1];
  result[i][1] = r[0];
}
console.log(result);
const str = stringify(result);
console.log(str);
fs.writeFileSync('./result.txt', str);
