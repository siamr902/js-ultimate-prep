const firstPromise = new Promise((res, rej) => {
  res("First");
});

const secondPromise = new Promise((res, rej) => {
  res(firstPromise);
});

secondPromise
  .then((res) => {
    return res;
  })
  .then((res) => console.log(res));
