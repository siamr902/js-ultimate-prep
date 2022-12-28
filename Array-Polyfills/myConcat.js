const people = ["Bob", "Sally", "Jim", "Anish", "Avery"];
const numbers = [1, 4, 6, 8, 9];

Array.prototype.myConcat = function(array) {
    return [...this, ...array];
}

// ["Bob", "Sally", "Jim", "Anish", "Avery", 1, 4, 6, 8, 9]
console.log(people.myConcat(numbers));