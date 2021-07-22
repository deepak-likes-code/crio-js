
const sample = [1, 7, 234, 54, 6, 2, 8, 4];

const mean = (values = []) => values.reduce((prev, curr) => prev + curr, 0) / values.length

const decorate = ans => "Average  " + ans
console.log(decorate(mean(sample)))