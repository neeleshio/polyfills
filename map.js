const arr = [1, 2, 3, 4, 5]

Array.prototype.myMap = function (cb) {
    const result = []

    for (let i = 0; i < this.length; i++) {
        result.push(cb(this[i]))
    }
    return result
}

//------------------------------------------------------//


const multiply = arr.myMap(x => x * x)

console.log(multiply) // [1, 4, 9, 16, 25]