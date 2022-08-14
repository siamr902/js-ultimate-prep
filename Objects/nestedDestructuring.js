const user = {
  name: "Bob",
  age: 29,
  fullName: {
    first: "Bob",
    last: "Rahman",
  },
};

const {
  fullName: { first },
} = user;

console.log(first);


