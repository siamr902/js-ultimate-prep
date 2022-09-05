const pizza = {
  topping: "Pepperoni",
  size: "md",
  order: 'to-go'
};

for (const key in pizza) {
    console.log(key, pizza[key])
}

for (const [key, val] in Object.entries(pizza)) {
  console.log(key, val);
}
