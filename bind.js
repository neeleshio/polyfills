let name = {
    firstName: "Neelesh",
    lastName: "Shetty"
}

let printName = function (city, state) {
    console.log(this.firstName + " " + this.lastName + " " + city + " " + state)
}


//polyfill for bind method


Function.prototype.myBind = function (obj, ...args) {
    //here obj is the 'name' object
    //this keyword pointing to printName function

    obj.getName = this;
    return function (...args2) {
        return obj.getName(...args, ...args2)
    }
}

let printMyName = printName.myBind(name, "Chikmagalur")
printMyName("Karnataka")