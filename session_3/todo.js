//empty array
const todoDB = [];
//addTodo(item,priority) function
function addTodo(item, priority) {
  priority === "high" ? todoDB.unshift(item) :
    todoDB.push(item)
}
//clearTodo(index) function
function clearTodo(index) {
  todoDB[index] = null;
}

//updateTodo(index,newItem) function
function updateTodo(index, newItem) {
  return todoDB[index] = newItem;
}

//getTodo(index) function

function getTodo(index) {
  if (index || index === 0) {
    return todoDB[index];
  }
  else {
    return todoDB;
  }
}

//insertTodo(item,index)
function insertTodo(item, index) {
  todoDB.splice(index, 0, item)
}

//removeTode(index)

function removeTodo(index) {
  return todoDB.splice(index, 1)
}


addTodo(2, 'high');
addTodo(3, '');
addTodo(5, '')

insertTodo(1, 1)
// updateTodo(0,3)
console.log(getTodo())

module.exports = { addTodo, clearTodo }