function checkPalindrome(string, begin, end) {
  if (begin >= end) return true;
  if (string[begin] !== string[end]) return false;
  return checkPalindrome(string, begin + 1, end - 1);
}

const str = "racecar";
console.log(checkPalindrome(str, 0, str.length - 1));
