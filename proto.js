// function
function check(){
    for(let i=0;i<12;i++){
        console.log("For Loop: " + i);
    }
}
check();
console.log("=====================");

// copy reference values
let values = [1,2,3,4,5,6,7,8,9];
let copy_values = [...values];
console.log("After copied: " + copy_values);
console.log("=====================");

// array stored as object
copy_values[-1] = 10;
console.log("Negative Index");
console.log(copy_values);
console.log("=====================");

// Delete array reference
console.log("Deleting array reference");
delete copy_values[1];
console.log(copy_values);
console.log("=====================");

// For-each array
let for_each_values = [1,2,3,4,5,6,7,8];
console.log("For each list");
for_each_values.forEach(function(val){
    console.log(val+2);
})
console.log("=====================");

// Object Storage
let object_test = {
    Name : "Kevin",
    Designation : "Samurai",
    Company : "Rangers Force"
};
copy_object_values = {...object_test}
console.log("Object Storage");
for(let key in copy_object_values){
    console.log(key + " : " + copy_object_values[key]);
}
console.log("=====================");

// Manipulating Objects
copy_object_values.Name = "Jayden";
console.log("Chaning and deleting objects");
delete copy_object_values.Designation;
for(let key in copy_object_values){
    console.log(key + " : " + copy_object_values[key]);
}
console.log("=====================");

// Do-while loops
let do_while_value = 15;
console.log("Do-while loops")
do{
    console.log("Loop Running");
    do_while_value++;
}
while(do_while_value<20);
console.log("=====================");

// Callback Function
setTimeout(function(){
    console.log("Delay by 2 sec");
},2000);
console.log("=====================");

// First Class Functions
function first_class_function(a){
    a();
}
first_class_function(function(){
    console.log("Running a type of first class function");
})
console.log("=====================");

// timeout again 
setTimeout(function(){
    console.log("=====================");
},2000);