const arr = [-5, 2, 4, 6, 10];

function binarySearch(arr, target) {
  const middle = Math.floor(arr.length >> 1);
  if (arr.length === 1 && arr[0] !== target) return -1;
  if (target === arr[middle]) return "Found";

  if (arr[middle] > target) return binarySearch(arr.slice(0, middle), target);
  if (arr[middle] < target) return binarySearch(arr.slice(middle), target);
}

console.log(binarySearch(arr, 6))