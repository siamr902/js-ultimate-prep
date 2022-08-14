const nums = {
  a: 100,
  b: 300,
  test: false,
};

function multiply(obj) {
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 5;
    }
  }
}

multiply(nums);

console.log(nums);
