// return number of ways to reach the bottom right cell of a matrix starting from the top left
// only being able to go down and right

const cache = Array.from({ length: m }, (_) =>
  Array.from({ length: n }, (_) => 0)
);

function numOfPaths(m, n) {
  // only 1 way to reach all cells in 1st row and col
  for (let i = 1; i < m; i++) {
    cache[0][i] = 1;
  }
  for (let j = 1; j < n; j++) {
    cache[j][0] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      cache[i][j] = cache[i - 1][j] + cache[i][j - 1];
    }
  }
  return cache[m - 1][n - 1];
}
