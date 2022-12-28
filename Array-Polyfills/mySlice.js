const nums = [1, 3, 5, 7, 8, 4, 5, 9, 0, 1, 5];

console.log(nums.slice(1, 5)); // 3, 5, 7, 8
console.log(nums.slice(-3)); // 0, 1, 5

Array.prototype.mySlice = function (start = 0, end = this.length) {
  if (start < 0) start = this.length - Math.abs(start);
  const res = [];
  for (let i = start; i < end; i++) {
    res.push(this[i]);
  }
  return res;
};

console.log(nums.mySlice(1, 5));
console.log(nums.mySlice(-3));
console.log(nums.mySlice(2));
