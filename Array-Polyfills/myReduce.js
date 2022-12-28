Array.prototype.myReduce = function (callback, initialValue) {
  if (!this.length) throw new Error("Empty array");
  var accumulator = initialValue;

  if (!accumulator) {
    if (typeof this[0] === 'string') accumulator = '';
    if (typeof this[0] === 'number') accumulator = 0;
  }

  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};

const sum = [1, 5, 7, 9].myReduce((a,b) => a + b)

console.log(sum)
