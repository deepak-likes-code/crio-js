const prompt = require('prompt-sync')();

const getInput = (message = '') => {
    const name = prompt(message);
    return name
}

const todo = getInput("What do you want to do today? ");
const todo2 = getInput("What do you want to do today next? ");


console.log("Todo: ", todo, "Next:", todo2)