//mean
let values = [3, 4, 1, 6, 7, 23];
const mean = (values = []) =>
    values.reduce((prev, current) =>
        prev + current, 0) / values.length



console.log(mean(values))

//average



//mode

const mode = (values = []) => {
    let arr = values.sort((a, b) => a - b)
    if (arr.length % 2 === 0) {
        return (arr[arr.length / 2] + arr[(arr.length / 2) - 1]) / 2
    } else {
        return arr[arr.length / 2]
    }
}


const average = (values = [], method) => method(values)


console.log(average(values, mode))