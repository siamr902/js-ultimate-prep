// takes an array
function promiseRecurse(funcPromises) {
  if (!funcPromises.length) return;

  const currentPromise = funcPromises.shift();
  currentPromise
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  promiseRecurse(funcPromises);
}
