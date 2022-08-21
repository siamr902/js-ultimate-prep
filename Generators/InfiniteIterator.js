function* infinite() {
  let i = 0;

  while (true) {
    yield i++;
  }
}

const generator = infinite();

for (let i = 0; i < 30; i++) {
  console.log(generator.next().value);
}
