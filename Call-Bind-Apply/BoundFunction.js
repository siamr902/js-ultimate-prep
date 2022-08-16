function z() {
  console.log(this);
}

const user = {
  g: z.bind(null),
};

// points to the window object
user.g()