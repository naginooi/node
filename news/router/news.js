import express from 'express';
import ejs from 'ejs';
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded());

const newsList = []; //nid, url, title, content, rdate

// 뉴스 목록
router.get('/', (req, res, next) => {
  ejs.renderFile('./views/list.ejs', { newsList }).then((data) => res.end(data));
});

// 뉴스 등록하기
router.post('/register', (req, res, next) => {
  const { imgURL_, title_, content_ } = req.body;
  const nid = Math.trunc(Math.random() * 1000);
  let date = new Date(Date.now()).toLocaleDateString();
  newsList.push({ nid, date, imgURL_, title_, content_ });
  res.redirect('/news');
});

// 제목 클릭 시
router.get('/:nid', (req, res, next) => {
  const nid = req.params.nid;
  const newsContent = newsList.filter((item) => nid == item.nid)[0];
  ejs.renderFile('./views/detail.ejs', { newsContent }).then((data) => {
    res.end(data);
  });
});

export default router;
