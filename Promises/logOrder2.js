console.log("begin");

const firstPromise = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
  console.log(3);
}).then((res) => console.log(res));

console.log("end");

// begin, 1, 3, end, 2

