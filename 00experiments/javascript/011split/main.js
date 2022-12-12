//한문자가 아닌 여러개의 delimiter로 split하기
//인터넷에서 본코드
"a=b,c:d".split('=').join(',').split(':').join(',').split(',')
console.log("a=b,c:d".split('=').join(','));