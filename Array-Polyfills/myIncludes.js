const people = ["Bob", "Sally", "Jim", "Anish", "Avery"];


Array.prototype.myIncludes = function (value) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === value) return true;
  }
  return false;
};

console.log(people.myIncludes("Jim"));