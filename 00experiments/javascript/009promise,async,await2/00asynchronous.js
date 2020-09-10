const fs = require('fs');
const fs_promises = require('fs').promises;

fs.readFile('./test.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
})

fs_promises.readFile('./test.txt', 'utf8')
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  })

const promiseAsync = async () => {
  try {
    const result = await fs_promises.readFile('./test3.txt', 'utf8');
    console.log(result);
  } catch(err1) {
    console.log(err1);
  }
};
promiseAsync();

//아래는 실패한 코드 왜 안되는지 모르겠음
// (async () => {
//   try {
//     const result = await fs_promises.readFile('./test3.txt', 'utf8');
//     console.log(result);
//   } catch(err1) {
//     console.log(err1);
//   }
// })();
