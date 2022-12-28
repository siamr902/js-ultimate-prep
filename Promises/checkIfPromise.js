function isPromise(value) {
  return Boolean(value && typeof value.then === "function");
}

const promise = new Promise(resolve => resolve(1));

console.log(isPromise(promise)); // true
console.log(isPromise(1)); // false
