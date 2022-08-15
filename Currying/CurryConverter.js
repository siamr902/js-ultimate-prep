// convert f(a, b, c) to f(a)(b)(c)

function convertCurry(func) {
  return function curriedFunc(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}

const sum = (a, b, c) => a + b + c;

const totalSum = convertCurry(sum);

console.log(totalSum(7)(67)(4));
