import express from 'express';
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('GET: /users');
});

router.post('/', (req, res, next) => {
  res.send('POST: /users');
});

router.put('/:id', (req, res, next) => {
  res.send(`PUT: /users/:id ==> ${req.params.id}`);
});

router.delete('/:id/:name', (req, res, next) => {
  res.send(`DELETE: /users/:id/:name ==> ${req.params.name}`);
});
export default router;
