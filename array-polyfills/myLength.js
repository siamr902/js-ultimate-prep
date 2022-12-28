const nums = [1, 3, 5, 7, 8, 4, 5, 9, 0, 1, 5, 1];

Array.prototype.myLength = function () {
  let curr = 0;
  while (this[curr] != undefined) {
    curr += 1;
  }
  return curr;
};

console.log(nums.length);
console.log(nums.myLength());
