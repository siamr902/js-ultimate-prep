const user = {
  name: "Bob",
  age: 29,
  fullName: {
    first: "Bob",
    last: "Rahman",
  },
};

Object.freeze(user);
console.log(Object.isFrozen(user));