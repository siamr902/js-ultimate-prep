const arr = Array.from({length: 12}, (_, i) => i + 1);
const res = [];


arr.forEach((val, idx) => res.push(Math.pow(val, idx)));

console.log(res)

