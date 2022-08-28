const nums = [1, 3, 6, 8, 1, 6, 8];

console.log(nums.filter((e, _, a) => a.indexOf(e) === a.lastIndexOf(e))[0]);
