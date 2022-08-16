var obj = { name: "Joey" };

function sayHi(age, profession) {
  return `Hello ${this.name} is ${age} and works as a ${profession}`;
}

// reuse the function
const bindFunction = sayHi.bind(obj);

console.log(bindFunction(29, "Developer"));
