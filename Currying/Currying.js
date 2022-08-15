function f(a) {
  return function (b) {
    return `${a}, ${b}`;
  };
}

console.log(f(5)(3));
