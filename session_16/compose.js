
// const withDiscount = (bill, discount) =>
//     Number(discount) >= 0 && Number(discount) <= 1
//         ? bill - bill * discount
//         : bill


// const decorator
const decorator = (value, pattern) => pattern + value + pattern

// const parseString

// const parseString = (bill, discount, pattern) => decorator(withDiscount(bill, discount), pattern)

const parseString = bill => discount => pattern => decorator(withDiscount(bill, discount, pattern))


// console.log(parseString(500, 0.1, "%%%"))


const withDiscount = (discount) => (bill) =>
    discount >= 0 && discount <= 1
        ? bill - bill * discount
        : bill



const tenDiscount = withDiscount(0.1)

console.log(tenDiscount('2000'))