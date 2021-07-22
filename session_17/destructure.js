const { add, clear } = require('../session_12/functionalProgramming')

const nextTodo = add([], 'add todo')

console.log(nextTodo)

const obj = { fname: 'Deepak', lang: 'Javascript' };
const { fname: name, lang: prog } = obj;
console.log(prog)

