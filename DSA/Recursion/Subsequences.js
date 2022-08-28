const arr = [3, 5, 6, 2, 1];
const nums = [1, 2, 3];

function sub(arr) {
  const res = [];
  function search(vals, path) {
    res.push(path);
    for (let i = 0; i < vals.length; i++) {
      search(vals.slice(i + 1), [...path, vals[i]]);
    }
  }

  search(arr, []);
  return res;
}

function main(arr) {
  const res = sub(arr);
  console.log(res);
}

main(nums);
