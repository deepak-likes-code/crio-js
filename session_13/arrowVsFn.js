

// 3.Arrow Functions dont have an argument keywor
// const addTodo = (todoDB, ...items) => [...items, ...todoDB];

// console.log(addTodo(['hey', 'hola'], "Todo1", "Todo2", "T
const data = [
    { _id: "1", name: "Vivek" },
    { _id: "2", name: "Neha" },
    { _id: "3", name: "Satya" },
    { _id: "4", name: "Amit" },
];

const getStudent = (data, id) => data.findIndex((student) => student._id === id);

console.log(getStudent(data, "1"))