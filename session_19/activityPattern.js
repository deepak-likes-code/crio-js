const sentence = "We have almost completed js";
const regEx = /JS/;

const isPresent = (pattern, str) => {
    try {
        return pattern.test(str)
    }
    catch {
        throw new Error('Invalid Input')
    }
}

console.log(isPresent(regEx, sentence))