// recursive

function add(a) {
  return function (b) {
    if (!b) return a;
    return add(a + b);
  };
}

console.log(add(2)(5)(3)(7)(4)(19)())