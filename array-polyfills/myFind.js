const pets = ["bunny", "hamster", "dog", "cat", "lizard", "parrot", "fish", "hamster", "cat", "parrot", "hamster", "dog"];

Array.prototype.myFind = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) return this[i];
    }
    return undefined;
}
