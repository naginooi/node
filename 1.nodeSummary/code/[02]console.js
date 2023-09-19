const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
  outside: {
    inside: {
      key: 'value',
    },
  },
};

console.time('전체 시간'); //time과 timeEnd 사이의 시간 측정
console.log('평범한 로그입니다 쉼표로 구분해 여러 값을 찍을 수 있습니다');
console.log(string, number, boolean);
console.error('에러 메세지는 console.error에 담아주세요');

console.table([
  { name: '이니', birth: 2001 },
  { name: '미니', birth: 2000 },
]);

//console.dir(객체, 옵션) : 객체를 콘솔에 표시할 때 사용.
//옵션의 colors를 true로 하면 콘솔에 색이 추가되어 보기 편함
//depth는 객체 안의 객체를 몇 단계까지 보여줄지를 결정한다. 기본값은 2
console.dir(obj, { colors: false, depth: 2 });
console.dir(obj, { colors: true, depth: 1 });

console.time('시간 측정');

for (let i = 0; i < 100000; i++) {}
console.timeEnd('시간 측정');

function b() {
  console.trace('에러 위치 추적');
}

function a() {
  b();
}
a();

console.timeEnd('전체 시간');
