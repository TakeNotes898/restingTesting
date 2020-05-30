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



let myImposterSyndrom = {whathappened: "Something Unaccpected"}

function letsDoSomethingInteresting(saySomethingInteresting){
  var aPartOfTheKey = "wha";
  return aPartOfTheKey + saySomethingInteresting;
}
var theNewWayOut = letsDoSomethingInteresting("thappened")



console.log(myImposterSyndrom[theNewWayOut]); //Something Unaccpected
console.log(myImposterSyndrom); // { what_Happened: 'Something Unaccpected' }
console.log(theNewWayOut); // what_Happened
console.log(letsDoSomethingInteresting()); //what_undefined


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

// ***********************************************************
// ***********************************************************
// ***********************************************************
// ***********************************************************
// You should not change the collection object's initialization

After updateRecords(5439, "artist", "ABBA"),
artist should be "ABBA"
After updateRecords(1245, "album", "Riptide"),
album should be "Riptide"
After updateRecords(2468, "tracks", "Free"),
tracks should have "1999" as the first element.
After updateRecords(2548, "tracks", ""),
tracks should not be set
After updateRecords(2548, "artist", ""),
artist should not be set
After updateRecords(5439, "tracks", "Take a Chance on Me"),
tracks should have "Take a Chance on Me" as the last element.
After updateRecords(1245, "tracks", "Addicted to Love"),
tracks should have "Addicted to Love" as the last element.



If prop isn't "tracks"
value isn't empty ("")
set the value = album's property.

If prop is "tracks"
but the album doesn't have a "tracks" property,
create an empty array before adding the new value to the album's corresponding property.

If prop is "tracks" and
value isn't empty (""),
push the value onto the end of the album's existing tracks array.

If value is empty (""),
delete the given prop property from the album.

Hints
Use bracket notation when accessing object properties with variables.

Push is an array method you can read about on Mozilla Developer Network.


function updateRecords(id, prop, value) {
if (prop === 'tracks'){
}else if (prop === 'tracks' && value){
  return value.push;
}else if (value === ''){
  delete prop.value;
}
else {return "bmbmnbmbmnb"}
return collection;
}















  // **************************THE*END*OF*SCRIPT******************************
