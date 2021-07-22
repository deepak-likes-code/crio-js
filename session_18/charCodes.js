const nums = [3, 55, 63, 1, 46, 21];
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i], '\t\t', nums[i].toString().charCodeAt(0));
}
console.log(nums.sort()) //[ 1, 21, 3, 46, 55, 63 ]