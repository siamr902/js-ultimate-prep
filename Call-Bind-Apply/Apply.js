// same as call, but takes an array

var obj = { name: "Joey" };

function sayHi(age) {
  return `Hello ${this.name} is ${age}`;
}

console.log(sayHi.apply(obj, [27]));