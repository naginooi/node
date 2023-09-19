const timeout = setTimeout(() => {
  console.log('1.5초 후 실행');
}, 1500);
const interval = setInterval(() => {
  console.log('1초마다 실행');
}, 1000);
const timeout2 = setTimeout(() => {
  console.log('실행되지 않습니다');
}, 3000);

setTimeout(() => {
  clearTimeout(timeout2);
  clearInterval(interval);
}, 2500); //2.5초가 지났을 때 clearTimeout과 clearInterval가 각각 timeout2 , interval을 취소한다

const immediate = setImmediate(() => {
  console.log('즉시 실행');
});

const immediate2 = setImmediate(() => {
  console.log('실행되지 않습니다');
}); // 바로 뒤에 clearImmediate 실행하여 취소했으므로 실행 X

clearImmediate(immediate2);

// 즉시 실행
// 1초마다 실행
// 1.5초 후 실행
// 1초마다 실행
