const path = require('path');

console.log("sep:", path.sep); //On POSIX : ₩₩ On Window : /
console.log("delimeter:", path.delimiter); //환경변수와 관련있다는데 잘 모르겠음

console.log(__filename);
console.log(__dirname);

console.log("dirname:", path.dirname(__filename));
console.log("extname:", path.extname(__filename));
console.log("basename:", path.basename(__filename));

console.log(path.parse(__filename));

let parsed = path.parse(__filename);

console.log(path.format({
	root: parsed.root,
	dir: parsed.dir,
	base: parsed.base,
	ext: parsed.ext,
	name: parsed.path,
}));

console.log(path.normalize('./..\hi/ab')); //역 슬래쉬는 이스케이프로만 인식하는 듯 

console.log(path.isAbsolute('../hi'));
console.log(path.isAbsolute('/hi'));

console.log('relative:', path.relative(path.dirname(__filename), '/'));

//join하고 resolve도 있음 나중에 보면 될듯

