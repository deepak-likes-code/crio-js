const ids = ["6awwby61l", "4pg04jthz", "6awwby61l", "4ncg1rbrw", "4ncg1rbrw"];

const getUnique = (arr) => {
    if (typeof arr === 'object') {
        return new Set(arr)
    } throw 'Invalid DataStructure'
}

console.log(getUnique(ids))