const user = {
  name: "Joe",
  age: 34,
  height: 173,
};

const stringObject = JSON.stringify(user);
const normalObject = JSON.parse(stringObject);

localStorage.setItem("test", stringObject);

console.log(stringObject);
console.log(JSON.parse(localStorage.getItem("test")));

// What is the output?

const gameUser = {
  user: "Bob",
  age: 12,
  level: 112,
};

const data = JSON.stringify(gameUser, ["age", "level"]);
// only stringifies those properties
console.log(data);

