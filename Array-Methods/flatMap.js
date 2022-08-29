const arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.map((e) => [e * 2]));

console.log(arr.flatMap((e) => [e * 2]));

// more useful scenario

const sentence = ["I love it here in", "Atlanta"];

console.log(sentence.map((w) => w.split(" ")));
console.log(sentence.flatMap((w) => w.split(" ")));
