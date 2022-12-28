// arrow functions will point to the winodw object unless they have a parent function

const user = {
  name: "Coby",
  age: 32,
  getDetails() {
    const testArrow = () => console.log(this.name);
    testArrow();
  },
};

user.getDetails(); // Coby
