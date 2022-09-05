const arr = [1, 4, 5, 6, 9, 2];

console.log(arr.fill(0, 1, 5)); // 1, 0, 0, 0, 0, 2

Array.prototype.myFill = function (value, start, end) {
  const res = [...this];
  for (let i = start; i < end; i++) {
    res[i] = value;
  }
  return res;
};

console.log(arr.myFill(0, 1, 5));