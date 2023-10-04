import express from 'express';
const router = express.Router();

router
  .get('/', (req, res) => {
    res.send('GET: /:id');
  })
  .post('/', (req, res, next) => {
    res.send('POST: /:id');
  })
  .put('/:id', (req, res, next) => {
    let id = req.params.id;
    res.send(`PUT: /:${id}`);
  })
  .delete('/:id/:name', (req, res, next) => {
    const { id, name } = req.params;
    res.send(`DELETE: /:${id}, ${name}`);
  });

export default router;
