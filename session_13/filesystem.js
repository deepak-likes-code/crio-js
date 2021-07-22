const Files = [
    {
        location: "x5E2A4F",
        filename: "Foundations.js",
        size: 8000,
    },
    {
        location: "x5E2A8E",
        filename: ".Procfile",
        size: 1800,
    },
    {
        location: "x3E238E",
        filename: ".env",
        size: 500,
    },
    {
        location: "x5B2A8F",
        filename: "Readme.md",
        size: 2800,
    },
    {
        location: "x5D894F",
        filename: "package.json",
        size: 2000,
    },
];

const isPayloadSizeValid = (files, limit = 5000) => files.every((file) => file.size <= limit)

const getFileExtension = (fileName) => fileName.toString().split(".")[1];

const hasInvalidFiles = (files = [], blockedExt = []) => files.some((file) => blockedExt.includes(getFileExtension(file.filename)))

// const value = isPayloadSizeValid(Files, 5000);
// const extension = getFileExtension('package.json')
// const find = hasInvalidFiles(Files, ['md'])
// console.log(extension)

console.log(hasInvalidFiles(Files, ["py", "java", "exe", "dmg"])); //false
console.log(hasInvalidFiles(Files, ["js", "exe"])); //true