let c = { greeting: "Hello" };
let d;

d = c;
c.greeting = "Sup";

console.log(d.greeting); // "Sup"

// the object is referenced, so anything changed will affect both

console.log({ a: 1 } === { a: 1 }); // false -> different space in the memory
console.log({ a: 1 } == { a: 1 }); // false

// what is the output?

let person = { name: "Thomas" };
const members = [person];
person = null;

console.log(members); // { name: "Thomas" }
// ^ Here the variable is modified, so no change takes effect;
// however, changing the property (e.g. person.name = null) will
// affect the output
