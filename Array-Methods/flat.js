const nums = [1, 2, [3, 4, [5, 6]]];

const deepFlat = (arr, depth = 1) => {
  if (!Array.isArray(arr)) return arr;

  return depth > 0
    ? arr.reduce((acc, curr) => acc.concat(deepFlat(curr, depth - 1)), [])
    : arr.slice();
};

console.log(deepFlat(nums, Number.MAX_SAFE_INTEGER));