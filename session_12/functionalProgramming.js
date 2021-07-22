const todoDB = [];

function addTodo(todoDB, item, priority) {
    const copy = [...todoDB];
    priority === "high" ? copy.unshift(item) : copy.push(item);
    return copy
}

function clearTodo(todoDB, index) {
    const copy = [...todoDB]
    copy[index] = null;
    return copy
}

function updateTodo(todoDB, index, newItem) {
    let copy = [...todoDB]
    copy[index] = newItem;
    return copy
}

function getTodo(todoDB, index) {
    if (index === undefined) {
        return todoDB;
    }
    return todoDB[index];
}

function insertTodo(todoDB, item, index) {
    let copy = [...todoDB];
    copy.splice(index, 0, item);
    return copy
}



function deleteTodo(todoDB, index) {
    let copy = [...todoDB]
    copy.splice(index, 1);
    return copy
}



module.exports = {
    add: addTodo,
    clear: clearTodo,
    get: getTodo,
    insert: insertTodo,
    delete: deleteTodo
}