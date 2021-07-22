

const createNumeronym = str => str.length < 4 ? str : str[0] + (str.length - 2) + str[str.length - 1]

const maskSentence = str => str.split(" ").map(str => createNumeronym(str)).join(' ')

const input = "Every developer likes to mix up kubernetes and javascript"

console.log(maskSentence(input))