function* flatten(array) {
  for (const value of array) {
    Array.isArray(value) ? yield flatten(value) : yield value;
  }
}

const arr = [
  [1, 2],
  [3, [4, [5]]],
];

const flattened = [...flatten(arr)];
console.log(flattened);
