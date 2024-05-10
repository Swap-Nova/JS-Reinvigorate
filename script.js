// word- random words
// keywords - loops, const, variables etc.

// variables (to store data) and constants (similar to variables but fixed)
var fact = "Astrology";
var check = "Astromomy";

console.log(fact + " is not the same as " + check);

// Hoisting : Undefined
var a;
console.log("Hoisting Example: "+ a);
a=12;

// Not-defined : Variable b if not declared below 
console.log("Not-defined Example: "+ b);
var b = 12;

var c = [12,13];
var d = c;
console.log("Before pop: "+ d);
d.pop();
console.log("After pop: "+ d);

// Re-fresh Hosting : Undefined Variable
console.log("Hosting Example: " + e);
var e;

// reference and primitive data types
var f = [10,12]; // references : array
var g = f;

g.pop();
console.log("Using References, the pop result is: " + f);
console.log("Using References, the pop result of the main array: " + f);

// conditionals- if,else,else-if loops
if(12>13){
    console.log("Wrong")
}
else if(13>12){
    console.log("True, 13 is greater than 12")
}
else{
    console.log("Skipped")
}

// functions
function proto(){
    console.log("Testing Function")
}
proto();
function number(a){
    // console.log(a);
    return a;
}
console.log("Function Number: "+ number(15));

// arrays
let array_new = [1,2,3,4,5,6,7];
array_new.splice(2,2);
console.log("Showing spliced elements: " + array_new);

// blank objects
let blank = {};

// filled objects
var details = {
    // inside are properties
    age : 24,
    name: "John",
    email: "john@example.com",
    contact: "43434343",

    // method
    loreum: function(){}
}

// to get details of the object : properties
console.log("Name of the person is: " + details.name);

// updating properties of 'details' objects
details.linkedin = "John47"
console.log("New addition Array: " + details.linkedin)

// changing the values
details.name = "Ben"
console.log("Renamed Array: " + details.name);