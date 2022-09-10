const greetings = ["hi", "hello", "sup", "howdy"].map(
  (greeting) =>
    greeting.charAt(0).toUpperCase() + greeting.slice(1).toLowerCase()
);

for (const greeting in greetings) {
  console.log(greeting); // 0 1 2 3
}

for (const greeting of greetings) {
  console.log(greeting);
}
