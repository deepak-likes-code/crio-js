const { constants } = require("buffer");

const sentence = 'Is it mostly present in JS?'
const regex = /most/
console.log(regex.test(sentence))

// Multiple Patterns
const multi = /most|ted|ve/

// Case insensitivity

const regexCase = /js/i

console.log(regexCase.test(sentence))