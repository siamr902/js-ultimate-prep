const multiplyFive = (n) => n * 5;
const addSeven = (n) => n + 7;
const subtractFour = (n) => n - 4;

// reduceRight goes from right -> left
function compose(...functions) {
  return (args) => {
    return functions.reduceRight((val, fn) => fn(val), args); 
  };
}

const evaluate = compose(addSeven, subtractFour, multiplyFive);

console.log(evaluate(5));
