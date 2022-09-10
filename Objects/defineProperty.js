const ages = Object.create(null);

Object.defineProperty(ages, "Brad", {
  value: 27,
  writable: true,
  enumerable: true, // default not enumerable
  configurable: false,
});
