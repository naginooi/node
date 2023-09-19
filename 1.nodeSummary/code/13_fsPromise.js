const fs = require("fs").promises;

//test.txt 파일을 읽어 콘솔에 출력
fs.readFile("./test.txt")
  .then((data) => {
    console.log(data);
  })
  .catch(console.log("--error"));

//test.txt 파일에 문자열 덮어쓰기
fs.writeFile("./test.txt", "./helllo")
  .then(console.log("--write complete"))
  .catch(console.log("--error"));

//test.txt 파일에 데이터 추가하기
fs.appendFile("./test.txt", "./helllo")
  .then(console.log("--append"))
  .catch(console.error);

//test.txt 파일 복사하기
fs.copyFile("./test.txt", "./test-copy.txt")
  //.then()
  .catch(console.error);

//sub-folder 경로 만들기
fs.mkdir("sub-folder").then().catch(console.error);
