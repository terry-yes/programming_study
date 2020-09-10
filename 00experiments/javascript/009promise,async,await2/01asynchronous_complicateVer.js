const fs = require('fs');
const fs_promises = require('fs').promises;

/*
fs.readFile('./test.txt', 'utf8', (err, data) => {
  if (err) throw err;
  let allData1 = data;
  fs.readFile('./test1.txt', 'utf8', (err1, data1) => {
    if (err1) throw err1;
    allData1 += data1;
    fs.readFile('./test2.txt', 'utf8', (err2, data2) => {
      if (err2) throw err2;
      allData1 += data2;
      fs.readFile('./test3.txt', 'utf8', (err3, data3) => {
        if (err3) throw err3;
        allData1 += data3;
        console.log('비동기로 파일들을 다 합쳤습니다\n', allData1);
      })
    })
  })
})
console.log('이 문장은 비동기 처리함수들 뒤에 쓰여있습니다.');

let allData2;
fs_promises.readFile('./test.txt', 'utf8')
  .then((data) => {
    allData2 = data;
    return (fs_promises.readFile('./test1.txt', 'utf8'))
  })
  .then((data) => {
    allData2 += data;
    return (fs_promises.readFile('./test2.txt', 'utf8'))
  })
  .then((data) => {
    allData2 += data;
    return (fs_promises.readFile('./test3.txt', 'utf8'))
  })
  .then((data) => {
    allData2 += data;
    console.log('promise로 비동기를 처리했습니다\n', allData2);
  })
  .catch((error) => {
      console.error(error);
  })
console.log('이 문장은 promise 뒤에 써놨었습니다')
*/
/*
const asyncFunction = async () => {
  const data = await fs_promises.readFile('./test.txt', 'utf8');
  const data1 = await fs_promises.readFile('./test1.txt', 'utf8');
  const data2 = await fs_promises.readFile('./test2.txt', 'utf8');
  const data3 = await fs_promises.readFile('./test3.txt', 'utf8');
  const allData2 = data + data1 + data2 + data3;
  console.log(allData2);
  console.log('이 문장은 async, await 다음에 쓰여있습니다.')
};
asyncFunction();
*/
const asyncFunction = async () => {
  try {
    const data = await fs_promises.readFile('./test.txt', 'utf8');
    const data1 = await fs_promises.readFile('./test1.txt', 'utf8');
    const data2 = await fs_promises.readFile('./test2.txt', 'utf8');
    const data3 = await fs_promises.readFile('./test3.txt', 'utf8');
    const allData2 = data + data1 + data2 + data3;
    console.log(allData2);
    console.log('이 문장은 async, await 다음에 쓰여있습니다.')
  } catch(err1) {
    console.log(err1);
  }
};
asyncFunction();
//아래는 실패한 코드 왜 안되는지 모르겠음
// (async () => {
//   try {
//     const result = await fs_promises.readFile('./test3.txt', 'utf8');
//     console.log(result);
//   } catch(err1) {
//     console.log(err1);
//   }
// })();

