const arr = [1, 2, 3, 4, 5]

Array.prototype.myMap = function (cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i])
    }
}

//------------------------------------------------------//


const multiply = arr.myMap(x => x * x)

console.log(multiply) // [1, 4, 9, 16, 25]