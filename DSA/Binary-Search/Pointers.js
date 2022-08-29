const arr = [-5, 2, 4, 6, 10];

function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let middle = Math.floor((left + right) >> 1)
        if (arr[middle] == target) return `Found at index ${middle}`
        if (target < arr[middle]) right = middle - 1
        if (target > arr[middle]) left = middle + 1
    }

    return -1
}

console.log(binarySearch(arr, 6));
