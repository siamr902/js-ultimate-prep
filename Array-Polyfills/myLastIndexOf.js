const pets = ["bunny", "hamster", "dog", "cat", "lizard", "parrot", "fish", "hamster", "cat", "parrot", "hamster", "dog"];


Array.prototype.myIndexOf = function (value) {
  for (let i = this.length - 1; i >= 0; i--) {
    if (this[i] === value) return i;
  }
  return -1;
};

console.log(pets.lastIndexOf("cat")); 
console.log(pets.myIndexOf("cat")); 
