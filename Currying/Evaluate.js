function evaluate(operation) {
  return function (a) {
    return function (b) {
      switch (operation) {
        case "multiply":
          return a * b;
        case "divide":
          return a / b;
        case "add":
          return a + b;
        case "subtract":
          return a - b;
        default:
          break;
      }
    };
  };
}

const mul = evaluate("multiply");
const add = evaluate("add");
console.log(mul(4)(5));
