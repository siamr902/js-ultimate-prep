const nums = [1, 3, 5, 7, 8, 4, 5, 9, 0, 1, 5];

for (let i = 2; i < 5; i++) {
  nums.splice(i, 1, NaN);
}

console.log(nums); // [1, 3, NaN, NaN, NaN, 4, 5, 9, 0, 1, 5]
