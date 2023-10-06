import express from 'express';
import ejs from 'ejs';

const router = express.Router();

let dwitterList = [];

router.use(express.json());
router.use(express.urlencoded());

///////////1. GET : /dwitter - 트윗한 내용 목록 나열
router.get('/', (req, res, next) => {
  // '/' -> '/dwitter'
  const renderList = dwitterList;
  ejs.renderFile('./views/index.ejs', { renderList }).then((data) => {
    res.end(data);
  });
});

///////////2. POST : /dwitter - 트윗 생성
router.post('/', (req, res, next) => {
  const { id, name, content } = req.body;
  const pid = Math.trunc(Math.random() * 1000);
  let date = new Date(Date.now());
  date = date.toLocaleDateString();
  dwitterList.push({ pid, id, name, date, content });
  res.redirect('/dwitter');
});

///////////3. GET : /dwitter/:userid - 내 트윗 보기
router.get('/:userid', (req, res, next) => {
  const userid = req.params.userid;
  const renderList = dwitterList.filter((item) => item.id == userid);
  ejs.renderFile('./views/index.ejs', { renderList }).then((data) => {
    res.end(data);
  });
  // if(item.id == usesrid) {
  //   return item
  // }
});

///////////4. PUT : /dwitter/:userid - 내 트윗 수정하기
router.put('/', (req, res, next) => {
  const { pid, content } = req.body;
  dwitterList.filter((item) => {
    if (item.pid === pid) item.content = content;
  });
  res.status(204).send('update success');
});

///////////5. DELETE : /dwitter/:userid - 내 트윗 삭제하기
router.delete('/', (req, res, next) => {
  const { pid } = req.body;
  dwitterList = dwitterList.filter((item) => item.pid !== pid);
  res.status(204).send('delete success');
});

export default router;
