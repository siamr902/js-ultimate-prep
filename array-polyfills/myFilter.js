Array.prototype.myfilter = function (callback) {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      res.push(this[i]);
    }
  }
  return res;
};

const filt = [1, 2, 3, 4, 5, 6, 7, 8, 9].myfilter((n) => n % 2 === 0);

console.log(filt);
