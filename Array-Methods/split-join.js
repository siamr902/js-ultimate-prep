const word = "hi.how,are you&doing?";

const arr = word.split(/[.,\s&]/);

console.log(arr);

const normal = arr.join("\n");

console.log(normal);
