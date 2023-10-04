import express from 'express';
import route from './route.js';
import testRouter from './test.js';
import joinRouter from './join.js';
const app = express();

app.use(express.json());

app.use('/', route);
app.use('/test', testRouter);
app.use('/join', joinRouter);
// 모두 use로 쓰고 있기 때문에 하위 디렉토리까지 전부 binding 되기 때문에 생략 가능
// app.put('/:id', route);
// app.delete('/:id/:name', route);

// app.get('/', (req, res) => {
//   res.send('GET: /:id');
// });

// app.post('/', (req, res, next) => {
//   res.send('POST: /:id');
// });

// app.put('/:id', (req, res, next) => {
//   let id = req.params.id;
//   res.send(`PUT: /:${id}`);
// });

// app.delete('/:id/:name', (req, res, next) => {
//   const { id, name } = req.params;
//   res.send(`DELETE: /:${id}, ${name}`);
// });

///////////////////////////////////////////////

// http://localhost:8080/test/?keyword=bts&name=hong
// app.get('/test', (req, res, next) => {
//   const { keyword, name } = req.query;
//   res.send(`keyword: ${keyword}, name: ${name}`);
// });

// app.post('/join', (req, res, next) => {
//   const { name, address } = req.body;
//   res.status(201).send(`name: ${name}, address:${address}`);
// });
app.listen(8081);
