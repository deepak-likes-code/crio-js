const Logger = require('./logger')




const items = [
    ["Choco Powder", 350],
    ["Honey Bottle", 110],
];


const BillSlip = require('../session_10/billslip')
const bill1 = new BillSlip(items)

console.log(bill1)

Logger(bill1.data)
