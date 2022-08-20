function once(func, context) {
  let res;

  return function () {
    if (func) {
      res = func.apply(context ?? this, arguments);
      func = null;
    }
    return res;
  };
}

const test = once(() => console.log("Hi"));
test();
test();
test();
