const fs = require('fs');

//process.memoryUsage().rss :
//프로세스의 주 메모리 장치(총 할당된 메모리의 하위 집합)에 차지하는 공간의 크기

console.log('before : ', process.memoryUsage().rss);
//30메가
const data1 = fs.readFileSync('./big.txt');
fs.writeFileSync('./big2.txt', data1);
console.log('buffer : ', process.memoryUsage().rss);
//1기가
