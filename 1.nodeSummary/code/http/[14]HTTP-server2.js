const http = require('http');
const fs = require('fs').promises;

http
  .createServer(async (req, res) => {
    try {
      const data = await fs.readFile('./[14]HTTP-server2.html');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
      res.end(data);
    } catch (error) {
      console.error(error);
      res.writeHead(500, { 'Content-Type': 'text/plain;charset=UTF-8' });
      res.end(err.message);
    }
  })
  .listen(8081, () => {
    console.log('8081번 포트에서 서버 대기 중입니다!');
  });
