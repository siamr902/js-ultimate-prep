const nums = [1, 1, 1, 5, 1, 1, 1, 1, 1, 1];

Array.prototype.mySome = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) return true
    }
    return false;
}

console.log(nums.mySome(num => num === 2)); // false
console.log(nums.mySome(num => num === 5)); // true