Array.prototype.myReverse = function () {
    const res = [];
    for (let i = this.length - 1; i >= 0; i--) {
        res.push(this[i]);
    }
    return res;
}

const array = ["Sally", "Bob", "Thomas", "Mike", "Eleven"];

console.log(array.myReverse()) // ["Eleven", "Mike", "Thomas", "Bob", "Sally"]