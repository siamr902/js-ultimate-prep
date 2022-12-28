const swap = (arr, l, r) => {
  let temp = arr[l];
  arr[l] = arr[r];
  arr[r] = temp;
};

function reverse(arr, left, right) {
  if (left >= right) return;

  swap(arr, left, right)
  reverse(arr, left + 1, right - 1);
}

const nums = [1, 5, 6, 8, 0, 8, 1, 2];

reverse(nums, 0, nums.length - 1);
console.log(nums)
