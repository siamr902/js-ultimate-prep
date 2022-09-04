const grid = [
  [1, 0, 1],
  [0, 0, 1],
  [1, 1, 1],
];

// 3rd col becomes first row, 2nd col becomes 2nd row, 1st col becomes 3rd row

function rotateLeft90(matrix) {
  const x = Math.floor(matrix.length >> 1);
  const y = matrix.length - 1;
  let k;
  for (let i = 0; i < x; i++) {
    for (let j = i; j < y - i; j++) {
      k = matrix[i][j];
      matrix[i][j] = matrix[y - j][i];
      matrix[y - j][i] = matrix[y - i][y - j];
      matrix[y - i][y - j] = matrix[j][y - i];
      matrix[j][y - i] = k;
    }
  }
}
