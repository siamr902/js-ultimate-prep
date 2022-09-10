const getName = (name) => {
  const hasName = !!name;
  return hasName;
};

console.log(getName("bob"));
console.log(getName(""));

console.log(`${(x => x)('I love')} to program`);
