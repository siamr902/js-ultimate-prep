function add(...nums) {
  return Array.from(nums).reduce((acc, curr) => acc + curr, 0);
}

console.log(add(4, 5, 6, 9, 3));

function displayAdd(func) {
  return `The sum is ${func(7, 3, 2, 1, 8)}`;
}

console.log(displayAdd(add));
