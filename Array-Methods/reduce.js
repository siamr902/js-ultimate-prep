const names = [
  "Jordan",
  "Tiffany",
  "Jordan",
  "Alex",
  "Alex",
  "Alex",
  "Jordan",
  "John",
  "Tiffany",
  "Eubank",
];

const count = names.reduce((total, curr) => {
  total[curr] ??= 0;
  total[curr] += 1;
  return total;
}, {});

console.log(count);

// reverse an array

const rev = names.reduce((acc, val) => {
  return [val, ...acc];
}, []);
