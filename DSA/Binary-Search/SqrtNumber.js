function squareRoot(number) {
  if (number === 0 || number === 1) return number;
  let start = 1,
    end = number,
    ans;
  while (start <= end) {
    let mid = Math.floor((start + end) >> 1);
    if (mid * mid === number) return mid;
    if (mid * mid < number) {
      start = mid + 1;
      ans = mid;
    } else {
      end = mid - 1;
    }
  }
}

// binary search method


