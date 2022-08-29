const arr = [9, 4, 55, 2, 1, 58, 5, 99, 0, 3, 57];

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numToInsert = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > numToInsert) {
        arr[j+1] = arr[j]
        j = j - 1
    }
    arr[j+1] = numToInsert
  }
}

insertionSort(arr)
console.log(arr)