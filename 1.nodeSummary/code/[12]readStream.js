const fs = require('fs');

// createReadStream은 한번에 64kbyte를 읽는다. 이를 반복 스트림하는 동작
// highWaterMark 옵션을 바꿔준다. 기본은 64000바이트 이다. 16바이트로 바꿔준다.
const readStream = fs.createReadStream('./stream-text.txt', { highWaterMark: 16 });
const data = [];

// chunk 크기 만큼 읽을 때 마다 이벤트를 발생시킨다. 파일이 크면 여러번 발생됨
readStream.on('data', (chunk) => {
  data.push(chunk);
  console.log('data : ', chunk, chunk.length);
});

// chunk 읽기가 다 끝마친 경우
readStream.on('end', () => {
  console.log('end: ', Buffer.concat(data).toString()); // chunk로 나뉘어진 버퍼 데이터를 합친다
});

// stream도 비동기라, 비동기들은 항상 에러 처리를 직접 정의해 줘야 한다.
readStream.on('error', (err) => {
  console.log('error : ', err);
});
