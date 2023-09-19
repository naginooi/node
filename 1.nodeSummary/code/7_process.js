const process = require("process");

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

//setTimeout((콜백함수) => {}, 3000); --> non-blocking
setTimeout(() => {}, 3000); // process 생략 가능

//nextTick(콜백함수)
process.nextTick(() => {
  console.log("nextTick");
});
