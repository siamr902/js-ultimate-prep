const pizza = {
  topping: "Pepperoni",
  size: "md",
  order: 'to-go'
};

for (const key in pizza) {
    console.log(key, pizza[key])
}
