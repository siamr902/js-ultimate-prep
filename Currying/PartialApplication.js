function sum(a) {
  return function (b, c) {
    return a + b + c;
  };
}

const x = sum(20);

console.log(x(10)(5));
console.log(x(8)(7));