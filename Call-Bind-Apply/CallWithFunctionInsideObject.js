const age = 19;

const person = {
  name: "Alex",
  age: 22,
  getAge: function () {
    return this.age;
  },
};

const person2 = { age: 27 };
// note this works with apply as well, bind too but call it
console.log(person.getAge.call(person2)); // 27
