const nums = Array.from({ length: 8 }, (_, i) => i);
const elements = ["a", "b", "c"];

elements.push.apply(elements, nums);

console.log(elements);

// Max -> no object context needed
console.log(Math.max.apply(null, nums));
