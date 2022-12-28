// functions that create new objects of a specific type

function createUser({ name, age, professsion }) {
  return {
    name,
    age,
    professsion,
    present: function () {
      console.log(
        `${this.name} is ${this.age} years old and works as a ${this.professsion}`
      );
    },
    setAge(newAge) {
      this.age = newAge;
    },
  };
}
