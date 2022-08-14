let user = {
  name: "Bill",
  age: 22,
};

const objClone = Object.assign({}, user);
const objClone2 = JSON.parse(JSON.stringify(user));
const objClone3 = {...user};