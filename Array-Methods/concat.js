const arr = [
  [1, 3],
  [5, 6],
  [1, 3],
  [1, 2],
  [9, 7],
];

const joined = arr.reduce((total, curr) => {
  return total.concat(curr);
}, []);

console.log(joined);
