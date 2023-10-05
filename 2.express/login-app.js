const express = require('express');
const app = express();
let memberList = []; // 값이 계속 추가가 되기 때문에 Let 으로 선언

//실행
app.use(express.json()); // 객체화
app.use(express.urlencoded({ extended: true })); // 인코딩

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

app.get('/join', (req, res) => {
  res.sendFile(__dirname + '/join.html');
});

app.post('/login', (req, res) => {
  //name 값
  const { id, pw } = req.body;
  let result = 0;

  for (let i = 0; i < memberList.length; i++) {
    let member = memberList[i];
    if (id === member.id && pw === member.pw) {
      result = 1;
      i = memberList.length; //break
    }
  }

  if (result === 1) {
    res.redirect('/');
  } else {
    res.sendFile(__dirname + '/loginFail.html');
    //res.redirect('/error');
  }
});

app.post('/join', (req, res) => {
  const { name, id, pw, address } = req.body;
  memberList.push({ name, id, pw, address });
  if (name === '' || id === '' || pw === '' || address === '') res.redirect('/error');
  else res.redirect('/');
});

app.get('/error', (req, res) => {
  res.sendFile(__dirname + '/error.html');
});

app.listen(8080, () => {
  console.log('8080번에서 서버 대기중입니다!');
});
