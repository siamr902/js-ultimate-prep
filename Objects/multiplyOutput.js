const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply(); // 20
multiply(); // 20 -> spread operator clones
multiply(value); // 20 // first time modified (takes precedence over the default param)
multiply(value); // 40 -> we are passing in the direct reference
