const pizza = {
  topping: "Pepperoni",
  size: "md",
};

delete pizza.topping;

console.log(pizza);

// IIFE: what will it return?

const func = (function (a) {
  delete a;
  return a;
})(10);

console.log(func);
// returns 10 since it only applies to objects
