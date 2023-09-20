const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./pipe-text.txt'); //스트림으로 읽을 파일
const zlibStream = zlib.createGzip(); // .gz 압축파일 생성
const writeStream = fs.createWriteStream('./pipe-text2.txt'); //스트림으로 쓸 파일

//text에서 읽은 chunk내용을 압축하고, 압축된 내용을 text2으로 씀
//파이프끼리 체이닝으로 여러 번 연결될 수 있다

readStream.pipe(zlibStream).pipe(writeStream);
