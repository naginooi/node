import express from 'express';
import ejs from 'ejs';
const router = express.Router();

const replyList = [];

router.use(express.json());
router.use(express.urlencoded());

router.get('/:nid', (req, res, next) => {
  const nid = req.params.nid;
  const rList = replyList.filter((item) => item.nid == nid);
  res.json(rList);
});
router.post('/', (req, res, next) => {
  const { nid, replyContent } = req.body;
  replyList.unshift({ nid, replyContent });
  res.status(201).send('success');
});

export default router;
