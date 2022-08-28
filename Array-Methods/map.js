const obj = {
  Bob: 9,
  Jay: 81,
  Sarah: 25,
  Jordan: 49,
};

const ages = Object.values(obj)
  .map((age) => Math.sqrt(age))
  .sort((a, b) => b - a);

  console.log(ages)
