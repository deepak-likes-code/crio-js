const nums = [1, 23, 2, 3, 45, 12]
const sorted = nums.sort((a, b) => {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
})

console.log(sorted)

// Hello just checking again
