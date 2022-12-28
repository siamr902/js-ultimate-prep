const word = "4of Fo1r pe6ople g3ood th5e the2";

const order = word
  .split(" ")
  .sort((a, b) => a.match(/\d/g) - b.match(/\d/g))
  .join(" ");

console.log(order);

const nums = [5, 8, 9, 4, 5, 0, 100, 52, 9, 1];

const sorted = nums.sort((a, b) => a - b);

console.log(sorted);