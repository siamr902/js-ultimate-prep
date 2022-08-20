// Write a function that allows you to do this

const addSeven = createBase(7);

addSeven(10); // 17
addSeven(21); // 28

function createBase(base) {
  return function (a) {
    console.log(base + a)
  };
}
