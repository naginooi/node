import express from 'express';
import dwRouter from './router/dwitter.js';

const app = express();
app.use('/dwitter', dwRouter);

app.listen('8081', () => {
  console.log('8081서버~');
});
