const longestCommonSubsequence = (str1, str2, str1length, str2length) => {
  if (str1length === 0 || str2length === 0) return 0;

  if (str1[str1length - 1] === str2[str2length - 1]) {
    return (
      1 + longestCommonSubsequence(str1, str2, str1length - 1, str2length - 1)
    );
  } else {
    return Math.max(
      longestCommonSubsequence(str1, str2, str1length - 1, str2length),
      longestCommonSubsequence(str1, str2, str1length, str2length - 1)
    );
  }
};

console.log(longestCommonSubsequence('AGGTAB', 'GXTXAYB', 7, 7)) // 4