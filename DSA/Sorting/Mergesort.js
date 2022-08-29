const arr = [9, 4, 55, 2, 1, 58, 5, 99, 0, 3, 57, 1];

function merge(left, right) {
  const sortedArr = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedArr.push(left.shift());
    } else sortedArr.push(right.shift());
  }
//   arrays may not be equal in length, so we need to account for that
  [...sortedArr, ...left, ...right]
};

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const middle = Math.floor(arr.length >> 1);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  // still may have >1 element, so call mergesort
  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort(arr))
