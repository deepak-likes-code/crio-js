const { isMainThread } = require("worker_threads");

const Files = [
    {
        location: "x5E2A4F",
        filename: "Foundations.js", //true
        size: 8000,
    },
    {
        location: "x5E2A8E",
        filename: ".Procfile", //true -> true
        size: 1800,
    },
    {
        location: "x3E238E",
        filename: ".env", //true => true || true || true => True
        size: 500,
    },
    {
        location: "x5B2A8F",
        filename: "Readme.md", //false =>  true || true || true || false => True
        size: 2800,
    },
    {
        location: "x5D894F",
        filename: "package.json",
        size: 2000,
    },
];

const isPayloadSizeValid = (files = [], limit = 10000) =>
    files.every((obj) => obj.size <= limit);

//filename.extension => ["filename", "extension"] => "extension"
const getFileExtension = (filename = "") =>
    filename.substr(filename.lastIndexOf(".") + 1);
// const getFileExtension = (filename = "") => filename.split(".")[1]



const hasInvalidFiles = (files = [], blockedExt = ["exe", "zip", "tar"]) => {
    //Return false if some of the filenames have the extension present in the blocked extension array
    return files.some((file) =>
        blockedExt.includes(getFileExtension(file.filename))
    );
};

const isValidPayload = (files = []) => {

    const restrictedFileExt = ["exe", "zip"];
    const getCheckResult = () =>
        !hasInvalidFiles(files, restrictedFileExt) && isPayloadSizeValid(files)
    return getCheckResult();
};



const runChecks = (files = [], blockedExt = 0, limit = 0, ...checks) => [...checks].every(x => x(files))


const result = runChecks(Files, isPayloadSizeValid, hasInvalidFiles)
console.log(result)