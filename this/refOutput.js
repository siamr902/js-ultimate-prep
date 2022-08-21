function makeUser() {
  return {
    name: "Jacob",
    ref: this,
  };
}

const user = makeUser();

console.log(user.ref.name); // window -> parent object

// how can we fix this?

function createUser() {
  return {
    name: "Jacob",
    ref() {
      return this.name;
    },
  };
}
