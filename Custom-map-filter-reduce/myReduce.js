Array.prototype.myreduce = function (callback, accumulator) {
  if (!this.length) throw new Error("Empty array");

  if (!accumulator) {
    if (typeof this[0] === 'string') accumulator = '';
    if (typeof this[0] === 'number') accumulator = 0;
  }

  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i]);
  }
  return accumulator;
};

const sum = [1, 5, 7, 9].myreduce((a,b) => a + b)

console.log(sum)
