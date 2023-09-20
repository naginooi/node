const fs = require('fs');

//process.memoryUsage().rss :
//프로세스의 주 메모리 장치(총 할당된 메모리의 하위 집합)에 차지하는 공간의 크기

console.log('before : ', process.memoryUsage().rss);
//30메가

const readStream = fs.createReadStream('./big.txt');
const writeStream = fs.createWriteStream('./big3.txt');
readStream.pipe(writeStream);
readStream.on('end', () => {
  console.log('stream : ', process.memoryUsage().rss);
});
//50메가
