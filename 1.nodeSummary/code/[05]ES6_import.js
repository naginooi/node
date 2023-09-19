/* 모듈 전체 내보내기 */
const obj = {
  num: 100,
  sum: function (a, b) {
    console.log(a + b);
  },
  extract: function (a, b) {
    console.log(a - b);
  },
};

export default obj;

/* 모듈 개별로 내보내기 */
const name = 'Ann';
function sayHello() {
  console.log('Hello World');
}
class Person {
  constructor(name) {
    this.name = name;
  }
}
export { name, sayHello, Person };
