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

const reverse = names.reduceRight((acc, curr) => {
  return [...acc, curr];
}, []);
