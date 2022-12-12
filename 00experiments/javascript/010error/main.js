let obj = '{"name": "hihi", "age":13}'

//throw하고 그 밑줄에 있는거 실행되나 테스트해봄
//결과: throw하는 순간 try로 감싸지 않으면 프로그램은 에러던지고 종료됨
let user = JSON.parse(obj);
try{
  if (!user.hi) throw new Error('something is wrong');
  console.log('try is not finished')
} catch {
  console.log('this is error')
}
console.log('end')

//new없이 Error만 하면?
console.error(Error('this is error msg'));
console.log(typeof(Error('hi')))
console.error(new Error('this is error msg'));
console.log(typeof(new Error('hi')))
