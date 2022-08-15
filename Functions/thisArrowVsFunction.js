const ps = {
  game: "Uncharted 4",
  fn1: () => console.log(`I play ${this.game}`),
  fn2() {
    console.log(`I play ${this.game}`);
  },
};

ps.fn1() // "I play undefined"
ps.fn2() // "I play Uncharted 4"