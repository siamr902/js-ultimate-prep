const arr = [9, 4, 55, 2, 1, 58, 5, 99, 0, 3, 57];

function selectionSort(arr) {
  let min;
  for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (i != min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
}

// still O(N^2) for nested for loop
selectionSort(arr);
console.log(arr);
