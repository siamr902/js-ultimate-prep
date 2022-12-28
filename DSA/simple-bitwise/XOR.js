const oddOneOut = [1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1].reduce((a, c) => a ^ c);

console.log(oddOneOut);

function bitwiseAdd(a, b) {
  return a ^ b;
}

console.log(bitwiseAdd(1, 8)) // 9
console.log(bitwiseAdd(4, 5)) // 1
