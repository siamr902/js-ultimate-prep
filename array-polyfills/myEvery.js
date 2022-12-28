const nums = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

Array.prototype.myEvery = function(callback) {
    let total = 0;
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) total++
    }
    return total === this.length;
}

console.log(nums.myEvery(val => val === 1))