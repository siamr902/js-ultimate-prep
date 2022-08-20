function counter() {
  let count = 0;

  function increment(n) {
    count += n;
  }

  function retrieve() {
    return `Counter = ${count}`;
  }

  return {
    increment,
    retrieve,
  };
}

const c = counter();
c.increment(20);
c.increment(10);
console.log(c.retrieve());
