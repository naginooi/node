const fs = require('fs');

fs.readFile('./readme.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
  // readFile의 결과물은 버퍼(buffer)라는 형식으로 제공된다
  console.log(data.toString());
});

// fs는 기본적으로 콜백 형식의 모듈이므로 실무에서 사용하기 불편하다.
// 따라서 fs 모듈을 프로미스 형식으로 바꿔주자!
