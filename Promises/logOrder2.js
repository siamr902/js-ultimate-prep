console.log("begin");

const firstPromise = new Promise((resolve) => {
  console.log(1);
  resolve(2);
  console.log(3);
}).then((res) => console.log(res));

console.log("end");

// begin, 1, 3, end, 2

const checkSum = new Promise((resolve, reject) => {
  const x = 3;
  const y = 10;

  return x + y === 15 ? resolve("Obviously") : reject("Terrible at Math");
});

checkSum
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
