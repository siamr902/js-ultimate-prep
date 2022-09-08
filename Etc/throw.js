function greeting() {
  throw 'foo bar';
}

function greet() {
  try {
    const data = greeting();
    console.log('It worked:', data);
  } catch (e) {
    console.log('Oh no an error:', e);
  }
}

greet() // -> Oh no an error: foo bar