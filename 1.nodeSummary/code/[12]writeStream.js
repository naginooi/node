const fs = require('fs');

const writeStream = fs.createWriteStream('./stream-text2.txt');

writeStream.on('finish', () => {
  console.log('파일 쓰기 완료');
});

//지정한 경로에 파일 내용 쓰기
writeStream.write('이 글을 씁니다.\n'); // 대용량 데이터일 경우, 보낼 때도 chunk로 잘라서 보낸다
writeStream.write('한 번 더 씁니다.\n');
writeStream.end(); //파일 쓰기 완료
