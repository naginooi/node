const http = require('http');

const course = [{ name: 'HTML' }, { name: 'CSS' }, { name: 'JavaScript' }, { name: 'Node' }, { name: 'Express' }];

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/course') {
    if (method === 'GET') {
      const strCourse = JSON.stringify(course);
      res.writeHead(200, { 'Content-Type': 'application/JSON; charset=utf-8' });
      res.end(strCourse);
    } else if (method === 'POST') {
      const body = [];
      req.on('data', (chunk) => {
        body.push(chunk);
      });
      req.on('end', () => {
        const bodyStr = Buffer.concat(body).toString();
        const newCourse = JSON.parse(bodyStr);
        course.push(newCourse);

        res.writeHead(200, { 'Content-Type': 'application/JSON; charset=utf-8' });
        res.end();
      });
    } else {
      res.write('NOT FOUND');
      res.end();
    }
  }
});

server.listen(8080);
