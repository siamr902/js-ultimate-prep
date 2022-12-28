const inventory = [
  { tag: "apples", quantity: 2 },
  { tag: "bananas", quantity: 0 },
  { tag: "cherries", quantity: 5 },
];

console.log(inventory.find(({ tag }) => tag === "apples")["quantity"]); // 2
console.log(inventory.findIndex(({ tag }) => tag === "bananas")); // 1
