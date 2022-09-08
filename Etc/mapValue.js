const val = [1, 2, 3].map((num) => {
  if (typeof num === "number") return;
  return num * 2;
});

console.log(val) // -> [undefined, undefined, undefined]
