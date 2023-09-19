const path = require('path');

const string = __filename;

console.log('path.sep:', path.sep); //경로의 구분자 mac : "/"
console.log('path.delimiter:', path.delimiter); //환경 변수의 구분자 mac : ":"
console.log('------------------------');
console.log('path.dirname():', path.dirname(string)); //파일이 위치한 폴더 경로
console.log('path.extname():', path.extname(string)); //파일의 확장자
console.log('path.basename():', path.basename(string)); //파일의 이름
console.log('path.basename - extname:', path.basename(string, path.extname(string)));
console.log('------------------------');
console.log('path.parse():', path.parse(string)); //파일의 경로를 root, dir, base, ext, name으로 구분
console.log(
  'path.format():',
  path.format({
    dir: '/Users/baekjisu/JavaScript/node/1.nodeSummary/code',
    name: 'path',
    ext: '.js',
  })
); //path.parse()한 객체를 파일 경로로 합친다
console.log('path.normalize():', path.normalize('/Users////baekjisu//JavaScript/')); //정상적인 경로 변환
console.log('------------------------');
console.log('path.isAbsolute(/Users/):', path.isAbsolute('/Users/')); //절대경로인지 상대경로인지 판단
console.log('------------------------');
