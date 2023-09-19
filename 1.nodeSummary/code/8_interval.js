let num = 1;
const interval = setInterval(() => {
  //let num = 1 --> 블럭 안에 있어서 계속 초기화됨
  console.log(num++);
}, 1000);

setTimeout(() => {
  clearInterval(interval);
}, 6000);
