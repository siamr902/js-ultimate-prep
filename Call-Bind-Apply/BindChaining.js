function z() {
  console.log(this.name);
}

z = z.bind({ name: "John" }).bind({ name: "Ann" });

z(); // John -> once a function is bound to a particular object, it will always be bound to that