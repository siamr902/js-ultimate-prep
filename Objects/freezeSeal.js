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

const user1 = {
  name: "Bob",
  age: 29,
  fullName: {
    first: "Bob",
    last: "Rahman",
  },
};

Object.seal(user1);
user1.name = "Jim";
console.log(Object.isSealed(user1));
delete user1.name; // cannot delete when sealed
console.log(user1.name);
