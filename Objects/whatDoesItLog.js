const circle = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * this.radius * Math.PI,
};

console.log(circle.diameter); // NAN
console.log(circle.perimeter); // NAN
