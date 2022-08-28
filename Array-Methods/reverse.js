const arr = Array.from({length: 4}, (_, col) => {
    return Array.from({length: 4}, (_, row) => {
        return row + col
    })
})

console.log(arr);

const modifiedArr = [...arr].map(row => row.reverse());
console.log(modifiedArr);