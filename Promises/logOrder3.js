console.log("begin");

const fn = () => {
  new Promise((res, rej) => {
    console.log(1);
    resolve("Success");
  });
};

console.log("middle");

fn().then((res) => console.log(res));

console.log("end");
