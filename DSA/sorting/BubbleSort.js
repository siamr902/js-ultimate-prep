const arr = [9, 4, 55, 2, 1, 58, 5, 99, 0, 3, 57];

function bubbleSort(arr, len) {
  if (len === 1) return;
  for (let j = 0; j < len; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
  bubbleSort(arr, len - 1);
}

bubbleSort(arr, arr.length);
console.log(arr);
