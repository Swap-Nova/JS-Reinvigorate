//var vs let
function check(){
	for(let i=1;i<12;i++){
		console.log(i);
	}
    // using let it will thrown an error but with var it will print till 12
	// console.log(i);
}
check();
console.log("=====================");

// copy reference values
var a = [1,2,3,4,5];
var b = [...a];
console.log("After copied: " + b);
console.log("=====================");

var object = {
    Name: 'Harsh',
    Age: '21'
};
var copy_object = {...object};
for(let key in copy_object){
    console.log(key + " after copied: " + copy_object[key]);
}
console.log("=====================");

// looping concepts
let values_list = [1,2,3,4,5,6,7,8,9,10,11,12,13]
values_list.forEach(function(val){
    console.log(val+2);
})
console.log(values_list);
console.log("=====================");

// alternate method
// function addTwo(val) {
//     console.log(val + 2);
// }

// let values_list = [1,2,3,4,5,6,7,8,9,10,11,12,13];
// values_list.forEach(addTwo);

// for-in loop
let object_test = {
    Name: "Dwight",
    Age: "42",
    Occupation: "Beet Farmer",
    Company: "Schrute Farms"
}

for(let key in object_test){
    console.log(key + ": " + object_test[key]);
    console.log("Individually Name: " + object_test.Name)
}
console.log("=====================");

// do-while loop
let proto = 15;
do{
    console.log("Do loop");
    proto++;
}
while(proto<15)

// callback function: async
setTimeout(function(){
    console.log("Function Run Delayed");
},2000);
console.log("=====================");

// first class function
function first_class(a){
    a();
}
first_class(function(){
    console.log("First Class Function Running");
})
console.log("=====================");

// Arrays Build
let js_array = [1,2,3,4,5,6,7,8,9];
js_array[-1] = 10; // negative index
console.log(js_array);
console.log("=====================");

// Delete from Object
let delete_object = {
    Name: "Jim",
    Company: "Dunder Mufflin",
    Designation: "Junior Salesman"
}
console.log("Jim Objects");
for(let key in delete_object){
    console.log(key + " : " + delete_object[key]);
}
console.log("=====================");

console.log("Jim Post-deletion objects");
delete delete_object.Name;
for(let key in delete_object){
    console.log(key + " : " + delete_object[key]);
}
console.log("=====================");