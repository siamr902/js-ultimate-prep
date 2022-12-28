// memoize with dp array with every val originally -Infinity

function minCostPath(grid, i = 0, j = 0) {
  const n = grid.length,
    m = grid[0].length;
  if (i >= n || j >= m) {
    return Number.POSITIVE_INFINITY;
  }
  if (i === n - 1 && j === m - 1) {
    return grid[n][m]; // current sum + the final
  }
  return (
    grid[n][m] +
    Math.min(
      minCostPath(grid, i + 1, j),
      minCostPath(grid, i, j + 1),
    )
  );
}
