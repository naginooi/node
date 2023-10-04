const express = require('express');
const server = express();

const course = [{ name: 'HTML' }, { name: 'CSS' }, { name: 'JavaScript' }, { name: 'Node' }, { name: 'Express' }];

server.get('/', (req, res) => {
  res.send('Hello~');
});

server
  .get('/course', (req, res) => {
    res.setHeader('Content-Type', 'application/JSON');
    res.status(200);
    res.json(course);
  })
  .post('/course', (req, res) => {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    req.on('end', () => {
      course.push(JSON.parse(Buffer.concat(body).toString()));
      res.setHeader('Content-Type', 'application/JSON');
      res.status(201).end();
    });
  });
server.listen(3300);
