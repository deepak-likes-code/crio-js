const { toNamespacedPath } = require("path");

const values = [1, 4, 5, 7, 3]

const double = values.map(x => x * 2)


const isOdd = (x) => x % 2 !== 0;
const Odd = values.filter(isOdd)
console.log(Odd)

// const evenValues = values.map(num => isEven(num) ? num : null)

// console.log(evenValues)

// names.map((name) => name[0])


// Reduce