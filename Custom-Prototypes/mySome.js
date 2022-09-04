const nums = [1, 1, 1, 5, 1, 1, 1, 1, 1, 1];

Array.prototype.mySome = function(callback) {
    let total = 0;
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) return Boolean(1)
    }
    return Boolean(0);
}

console.log(nums.mySome(num => num === 2));
console.log(nums.mySome(num => num === 5));