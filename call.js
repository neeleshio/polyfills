let name = {
    firstName: "Neelesh",
    lastName: "Shetty"
}

let printName = function (city, state) {
    console.log(this.firstName + " " + this.lastName + " " + city + " " + state)
}


//polyfill for call method


Function.prototype.myCall = function (obj, ...args) {
    //here obj is the 'name' object
    //this keyword pointing to printName function

    obj.getName = this;
    return obj.getName(...args)
}

let printMyName2 = printName.myCall(name, "Chikmagalur", "Karnataka")