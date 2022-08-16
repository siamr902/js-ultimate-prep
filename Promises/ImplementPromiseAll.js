function showText(text, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, time);
  });
}

function myPromiseAll(promises) {
  let result = [];
  return new Promise((resolve, reject) => {
    promises.forEach((p, i) => {
      p.then((res) => {
        result.push(res);
        if (i === promises.length - 1) {
          resolve(result);
        }
      }).catch((err) => reject(err));
    });
  });
}

Promise.all([showText("Hello", 1000), Promise.resolve("Hi")]).then((value) =>
  console.log(value)
);
