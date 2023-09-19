console.log("code 1");
setTimeout(() => {
  console.log("setTimeout");
}, 0);

console.log("code 2");

setImmediate(() => {
  console.log("setImmediate");
});

console.log("code 3");

process.nextTick(() => {
  console.log("nextTick");
}); //우선순위가 제일 높음!
