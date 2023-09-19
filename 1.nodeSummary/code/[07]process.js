const process = require('process');

process.version; // 버전
process.arch; // 아키텍처 정보
process.platform; // 운영체제 플랫폼 정보
process.pid; // 현재 프로세스의 아이디
process.uptime(); // 프로세스가 시작된 후 흐른 시간 (단위: 초)
process.execPath; // 노드의 경로
process.cwd(); // 현재 프로세스가 실행되는 위치
process.cpuUsage(); // 현재 cpu 사용량

// process.env --> 시스템 환경 변수를 나타냄

setImmediate(() => {
  console.log('immediate');
});

//이벤트 루프가 다른 콜백 함수들보다 nextTick의 콜백 함수를 우선으로 처리
process.nextTick(() => {
  console.log('nextTick');
});

setTimeout(() => {
  console.log('timeout');
}, 0);

Promise.resolve().then(() => {
  console.log('promise');
});

// nextTick
// promise --> resolve된 promise도 다른 콜백들보다 우선시 됨
// timeout
// immediate

let i = 1;
setInterval(() => {
  if (i === 5) {
    console.log('종료!');
    process.exit();
  }
  console.log(i);
  i++;
}, 1000);
// 1
// 2
// 3
// 4
// 종료!
