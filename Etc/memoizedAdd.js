const memoizedAdd = () => {
  const cache = {};
  return (num) => {
    if (num in cache) {
      return `Retrieved ${cache[num]} from cache`;
    }
    const res = num + 10;
    cache[num] = res;
    return `Cached ${res} in cache`;
  };
};

const addFunc = memoizedAdd();
addFunc(15);
addFunc(15);
addFunc(25);
addFunc(15);
addFunc(7);
addFunc(25);
