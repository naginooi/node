import express from 'express';
const router = express.Router();

export default router;
router.use((req, res, next) => {
  res.status(404).send('File Not Found');
});
