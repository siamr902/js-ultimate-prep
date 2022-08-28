const zeroes = new Array(10).fill(0);

console.log(zeroes.every((e) => e)); // false
console.log(zeroes.every((e) => !e)); // true

const vals = [1, 2, 8, 8, 4, 6, 20];

console.log(vals.some(val => val % 5 === 0)); // true