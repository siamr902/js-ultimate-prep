const pets = ["bunny", "hamster", "dog", "cat", "lizard", "parrot", "fish", "hamster", "cat", "parrot", "hamster", "dog"];

Array.prototype.myFindIndex = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) return i;
    }
    return -1;
}

console.log(pets.findIndex(t => t.length === 3))
console.log(pets.myFindIndex(t => t.length === 3))
