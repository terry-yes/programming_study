const fs = require('fs');
const fs_promises = require('fs').promises;

/*
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
*/

let fileList = ['test.txt', 'test1.txt', 'test2.txt', 'test3.txt'];


const asyncFunction = async () => {
	try{
		for (const [i, r] of fileList.entries()){
			const data = await fs_promises.readFile(r, 'utf8');
			console.log(data);
		}
  } catch(err1) {
    console.error(err1);
  }
};
asyncFunction();
