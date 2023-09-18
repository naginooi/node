console.log('logging...');

//log level
console.log('log'); // 개발
console.info('info'); // 정보, 사용법
console.warn('warn'); // 경고
console.error('error'); // 에러

// console.clear(); // 로그 삭제

//assert
console.assert(2 === 2, '동일함'); //조건식이 true이면 로그 출력 x
console.assert(2 === 3, '동일하지않음'); //false 인 경우에만 출력 o

//print object
const student = { name: '홍길동', age: 20, color: { default: 'red' } };
console.log(student);
console.table(student);
console.dir(student, { showHidden: true, color: false, depth: 0 });
//{ name: '홍길동', age: 20, color: [Object] }
