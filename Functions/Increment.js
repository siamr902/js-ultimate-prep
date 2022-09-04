// What is the difference betwen i++ and ++i?

const text =
  "++i will increment the value of i and then return the incremented value. i++ will increment the value, but return the original";

function before() {
  let i = 1;
  j = ++i;
  return [i, j];
}

function after() {
  let i = 1;
  j = i++;
  return [i, j];
}

console.log(before()); // 2 2
console.log(after()); // 2 1
