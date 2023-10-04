import express from 'express';
const router = express.Router();

router.post('/', (req, res, next) => {
  const { name, address } = req.body;
  res.status(201).send(`name: ${name}, address:${address}`);
});

export default router;
