const xlsx = require('xlsx');

const workbook = xlsx.readFile('xlsx/data.xlsx');
console.log(Object.keys(workbook.Sheets)); // TODO: workbook.SheetNames
const ws = workbook.Sheets.영화목록;
const records = xlsx.utils.sheet_to_json(ws); // TODO: 강좌에서 header 옵션 보여주기
console.log('type', typeof records);
// console.log(records);
// console.log(records.entries());
// console.log(Object.entries(records));
for (const [i, r] of records.entries()) {
  console.log(i, r);
}
console.log('------------------')
for (const [i, r] of Object.entries(records)) {
  console.log(i, r);
}
