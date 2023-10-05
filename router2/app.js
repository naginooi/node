import express from 'express';
import postsRouter from './route/posts.js';
import errorRouter from './route/error.js';
import usersRouter from './route/users.js';

const app = express();

app.use('/posts', postsRouter);
app.use('/users', usersRouter);
app.use('/', errorRouter);

app.listen(8081, () => {
  console.log('8081번에서 서버 대기중');
});
