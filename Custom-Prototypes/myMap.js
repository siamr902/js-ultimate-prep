Array.prototype.mymap = function (callback) {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(callback(this[i], i, this));
  }
  return res;
};

const mult = [1, 2, 3].mymap((n) => n * 3);

console.log(mult);
