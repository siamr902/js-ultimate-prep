const pets = ["bunny", "hamster", "dog", "cat", "lizard", "parrot", "fish"];


Array.prototype.myIndexOf = function (value) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === value) return i;
  }
  return -1;
};

console.log(pets.myIndexOf("lizard")); // 4