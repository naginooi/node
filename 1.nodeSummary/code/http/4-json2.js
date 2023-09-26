const http = require('http');

const address = [];

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/address') {
    if (method === 'GET') {
      if (address.length != 0) {
        res.writeHead(200, { 'Content-Type': 'application/JSON; charset=utf-8' });
        res.end(JSON.stringify(address));
      } else {
        res.end('-- No Data --');
      }
    } else if (method === 'POST') {
      const body = [];
      req.on('data', (chunk) => {
        body.push(chunk);
      });
      req.on('end', () => {
        address.push(JSON.parse(Buffer.concat(body).toString()));

        res.writeHead(201, { 'Content-Type': 'application/JSON; charset=utf-8' });
        res.end();
      });
    } else {
      res.write('NOT FOUND');
      res.end();
    }
  }
});

server.listen(9000);
