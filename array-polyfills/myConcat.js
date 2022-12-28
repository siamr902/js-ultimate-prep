const people = ["Bob", "Sally", "Jim", "Anish", "Avery"];
const numbers = [1, 4, 6, 8, 9];

Array.prototype.myConcat = function(array) {
    const res = [...this, ...array];
    // array.forEach(element => res.push(element))
    return res;
}

console.log(people.myConcat(numbers));