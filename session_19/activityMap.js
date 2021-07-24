const { Map } = require("google-protobuf")

const toMap = (obj) => {
    if (typeof obj === 'object') {
        return new Map(Object.entries(obj))
    }
    throw new TypeError('Invalid object')
}


console.log(toMap({ 'hi': 23, 45: 21 }))