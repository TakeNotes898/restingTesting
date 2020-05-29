// ***********************************************************
// ***********************************************************
// ***********************************************************
// ***********************************************************
var someObj = { propName: "John" };
function propPrefix(str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
console.log(someObj[someProp]); // "John"

// ***********************************************************
// ***********************************************************
// ***********************************************************
// ***********************************************************

var alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  24:"C",
  25:"B",
  26:"A"
};
var value = 26;
console.log(alpha[value]);
// ***********************************************************
// ***********************************************************
// ***********************************************************
// ***********************************************************

function checkObj(obj, checkProp) {
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh",
  city: "Seattle"
}
if (myObj.hasOwnProperty(obj)){
  return myObj[obj];
}
else if(myObj.hasOwnProperty(obj) != true){
  return "Not Found"
}
} console.log(checkObj('city'));

// ***********************************************************
// ***********************************************************
// ***********************************************************
// ***********************************************************

// // to add new properties in JS object
//
// var_name.new_key = 'new_value'
//
// // delete properties in JS objects
//
// delete var_name.existing_key
//
// // updateing properties in JS object
//
// var_name.key = "new content of the value"
// or
// var_name['key'] = "new content of the value"






































  // **************************THE*END*OF*SCRIPT******************************
