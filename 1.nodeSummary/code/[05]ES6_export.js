/* 모듈 전체, 개별로 가져오기 */
import obj, { name, sayHello, Person } from './[05]ES6_import.js';

obj.num;
obj.sum(10, 20);
obj.extract(30, 10);

console.log(name);
sayHello();
const person = new Person('min');
