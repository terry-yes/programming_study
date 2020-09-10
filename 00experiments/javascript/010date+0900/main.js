// let a = new Date();
// console.log(a);
let timeSource = "2020-10-05T09:00:00.000Z"
let dateObj = new Date(timeSource);
console.log(dateObj);

let timeString = dateObj.toLocaleString("en-US", {timeZone: "Asia/Seoul"});
let timeString_KR = dateObj.toLocaleString("ko-KR", {timeZone: "Asia/Seoul"});
console.log(timeString);
console.log(timeString_KR);

//
// // console.log(a + 9:00);
//
// function addHours(date, hours) {
//   return new Date(date.getTime() + hours*60*60000);
// }
//
// console.log(addHours(a, 9))
//
// var asiaTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Seoul"});
// console.log(new Date(asiaTime))
// // console.log('Asia time: '+ (new Date(asiaTime)).toISOString())
// var abc = new Date().toLocaleString("en-US", {timeZone: "UTC"});
// console.log(new Date(abc))
