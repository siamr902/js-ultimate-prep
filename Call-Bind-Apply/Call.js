var obj = { name: "Joey" };

function sayHi(age) {
  return `Hello ${this.name} is ${age}`;
}

console.log(sayHi.call(obj, 27));
