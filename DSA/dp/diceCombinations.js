// Count # of ways to construct sum n by throwing a dice 1 or more times
// e.g. n = 3 there are 4 ways: 1 + 1 + 1, 1 + 2, 2 + 1, 3

function diceCombinations(dp, target) {
  if (target < 0) return 0;
  if (target === 0) return 1;

  if (dp[target] !== -1) return dp[target];

  dp[target] = 0;
  for (let i = 1; i <= 6; i++) {
    dp[target] += diceCombinations(dp, target - i);
  }
  return dp[target];
}

function driver(target) {
  const dp = Array.from({ length: target + 1 }, (_) => -1);
  return diceCombinations(dp, target);
}

console.log(driver(3));

// iteratively

function iterativeCombinations(n) {
  const dp = Array.from({ length: target + 1 }, (_) => -Infinity);

  dp[0] = 1;
  for (let i = 1; i <= n; i++) {
    dp[i] = 0;
    for (let j = 1; j <= 6; j++) {
      if (i - j >= 0) {
        dp[i] += dp[i - j];
      }
    }
  }
  return dp[n];
}
