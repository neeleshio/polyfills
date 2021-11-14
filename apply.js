let name = {
    firstName: "Neelesh",
    lastName: "Shetty"
}

let printName = function (city, state) {
    console.log(this.firstName + " " + this.lastName + " " + city + " " + state)
}


//polyfill for apply method


Function.prototype.myApply = function (obj, args) {
    //here obj is the 'name' object
    //this keyword pointing to printName function

    obj.getName = this;
    return obj.getName(...args)
}

let printMyName = printName.myApply(name, ["Chikmagalur", "Karnataka"])