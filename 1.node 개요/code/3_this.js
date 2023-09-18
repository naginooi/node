function hello(num) {
  this.num = num;
  console.log(num);
  // console.log(this);
}

hello(100);

class Test {
  constructor(name) {
    this.name = name;
    console.log(this);
  }
}

const t = new Test('hong');
