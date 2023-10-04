import express from 'express';
const router = express.Router();
// http://localhost:8080/test/?keyword=bts&name=hong
router.get('/test', (req, res, next) => {
  const { keyword, name } = req.query;
  res.send(`keyword: ${keyword}, name: ${name}`);
});

export default router;
