// If statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as Boolean conditions and they may only be true or false.

function trueOrFalse(wasThatTrue) {
if (wasThatTrue) {
  return "Yes, that was true";
}
return "No, that was false";
}
//
console.log(trueOrFalse(true))
console.log(trueOrFalse(false))


// *************************************************************************************
// *                                                                                   *
// *                                                                                   *
// *                              Implicit vs. explicit coercion                       *
// *                                                                                   *
// *                                                                                   *
// *************************************************************************************


// Type coercion can be explicit and implicit.
// When a developer expresses the intention to convert between types by writing the appropriate code, like Number(value), it’s called explicit type coercion (or type casting).
// Since JavaScript is a weakly-typed language, values can also be converted between different types automatically, and it is called implicit type coercion.
// Three types of conversion
// The first rule to know is there are only three types of conversion in JavaScript:
// to string
// to boolean
// to number

function testEqual(val) {
  if (val == '12') {
    return "Equal";
  } return "Not Equal";
}testEqual(12);
console.log(testEqual(12));
// *************************************************************************************
function testStrict(val) {
  if (val === 7) {
    return "Equal";
  } return "Not Equal";
}testStrict(10);
console.log(testStrict(10));

// The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.

function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }
  if (val > 10) {
    return "Over 10";
  } return "10 or Under";
}
console.log(testGreaterThan(10));



// *************************************************************************************
// *                                                                                   *
// *                                                                                   *
// *                              Introducing Else Statements                          *
// *                                                                                   *
// *                                                                                   *
// *************************************************************************************
// When a condition for an if statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen. With an else statement, an alternate block of code can be executed.


function testElse(val) {
  var result = "";
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  } return result;
}
console.log(testElse(4));

// *************************************************************************************

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
console.log(orderMyLogic(4));
console.log(orderMyLogic(6));
console.log(orderMyLogic(11));

// *************************************************************************************



function testSize(num) {
if (num < 5){
  return "Tiny"
}else if (num < 10) {
  return "Small"
}else if (num < 15) {
  return "Medium"
}else if (num < 20) {
  return "Large"
}else if(num >= 20){
  return "Huge"
}else {
  return "Change Me";
 }
}
console.log(testSize(0));
console.log(testSize(4));
console.log(testSize(5));
console.log(testSize(8));
console.log(testSize(10));
console.log(testSize(14));
console.log(testSize(15));
console.log(testSize(17));
console.log(testSize(20));
console.log(testSize(25));




// *************************************************************************************
// *                                                                                   *
// *                                                                                   *
// *           Selecting from Many Options with Switch Statements                      *
// *                                                                                   *
// *                                                                                   *
// *************************************************************************************

function caseInSwitch(val) {
  var answer = "";
    switch(val){
      case 1:
        return "alpha";
        break;
      case 2:
        answer = "beta";
        break;
      case 3:
        return "gamma";
        break;
      case 4:
        answer = "delta";
        break;
    }return answer;
}
console.log(caseInSwitch(1));
console.log(caseInSwitch(2));
console.log(caseInSwitch(3));
console.log(caseInSwitch(4));

// ***********************************************************************

function switchOfStuff(val) {
  var answer = "";
switch (val){
  case "a":
    return "apple";
    break;
  case "b":
    return "bird";
    break;
  case "c":
    answer = "cat";
    break;
  default:
    return "stuff";
    break;
}return answer;
}
console.log(switchOfStuff("a"));

// ***********************************************************************
function sequentialSizes(val) {
  var answer = "";
switch (val){
  case 1:
  case 2:
  case 3:
    return "Low";
    break;
  case 4:
  case 5:
  case 6:
    return "Mid";
    break;
  case 7:
  case 8:
  case 9:
    return "High";
    break;
}return answer;
}
console.log(sequentialSizes(4));


// *************************************************************************************
// *                                                                                   *
// *                                                                                   *
// *                Returning Boolean Values from Functions                            *
// *                                                                                   *
// *                                                                                   *
// *************************************************************************************


function isLess(a, b) {
    return a < b;
}


console.log(isLess(10, 15));


function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
console.log(myFun());


function abTest(a, b) {
if (a < 0 || b < 0){
  return;
} return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(2,2));

// *************************************************************************************
// *                                                                                   *
// *                                                                                   *
// *                Accessing Object Properties with Variables                         *
// *                                                                                   *
// *                                                                                   *
// *************************************************************************************

var dogs = { Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"};
var myDog = "Snoopie";
var myBreed = dogs[myDog];
console.log(myBreed); // "Doberman"
// ***********************************************************************
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
var playerNumber = 16;
var player = testObj[playerNumber];
console.log(player);

testObj[21] = "Bangkok"
testObj[12] = "Namath foo"
console.log(testObj);
// ***********************************************************************
// Look into this. keep notes
var variable = { propName: "John" };
function function1(string) {
  var thevarname = "prop";
  return thevarname + string;
}
  var something = function1("Name"); // something now holds the value 'propName'
  console.log(variable[something]); // "John"

// *************************************************************************************
// *                                                                                   *
// *                                                                                   *
// *                        Using Objects for Lookups                                  *
// *                                                                                   *
// *                                                                                   *
// *************************************************************************************


function phoneticLookup(val) {
  var result = "";
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  }
  return lookup[val];
  return result;
} console.log(phoneticLookup("alpha"));
// ***********************************************************************
function checkObj(obj, checkProp) {
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh",
  city: "Seattle"
}
if(myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return "Not Found";
  }
}
console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"));
console.log(checkObj({city: "Seattle"}, "city"));
console.log(checkObj({city: "Seattle"}, "district"));

// *************************************************************************************
// *                                                                                   *
// *                                                                                   *
// *                        Manipulating Complex Objects                               *
// *                                                                                   *
// *                                                                                   *
// *************************************************************************************

// This is an array which contains one object inside. The object has various pieces of metadata about an album. It also has a nested "formats" array. If you want to add more album records, you can do this by adding records to the top level array. Objects hold data in a property, which has a key-value format. In the example above, "artist": "Daft Punk" is a property that has a key of "artist" and a value of "Daft Punk". JavaScript Object Notation or JSON is a related data interchange format used to store data.
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": ["CD", "8T", "LP"],
    "gold": true
  },
  {
    "artist": "Whooopsin",
    "title": "ToDopsin happened",
    "release_year": 10_000_000,
    "formats": ["VHS", "floppy disc", "cloud"]
  }
];
console.log(myMusic[1]);

// *************************************************************************************
// *                                                                                   *
// *                                                                                   *
// *                        Accessing Nested Objects                                   *
// *                                                                                   *
// *                                                                                   *
// *************************************************************************************
// The sub-properties of objects can be accessed by chaining together the dot or bracket notation.

var myStorage = {
  "car": {
    "inside": { "glove box": "maps", "passenger seat": "crumbs" },
    "outside": { "trunk": "jack" }
}};
var gloveBoxContents = myStorage.car.inside['glove box'];
console.log(myStorage);
// *************************************************************************************
// *                                                                                   *
// *                                                                                   *
// *                        Accessing Nested Arrays                                    *
// *                                                                                   *
// *                                                                                   *
// *************************************************************************************
// As we have seen in earlier examples, objects can contain both nested objects and nested arrays. Similar to accessing nested objects, Array bracket notation can be chained to access nested arrays.

var myPlants = [
  {
    type: "flowers",
    list: [ "rose", "tulip", "dandelion" ]
  },
  {
    type: "trees",
    list: [ "fir", "pine", "birch" ]
  }
];
var secondTree = myPlants[1].list[1];
console.log(secondTree);



// *************************************************************************************
// *                                                                                   *
// *                                                                                   *
// *                    Iterate with JavaScript While Loops                            *
// *                                                                                   *
// *                                                                                   *
// *************************************************************************************

var ourArray = [];
var i = 0;
while(i < 5) {
  ourArray.push(i);
  i++;
}
console.log(ourArray);
// ***********************************************************************
var myArray = [];
var i = 0;
while(i < 6) {
  myArray.push(i);
  i++;
}
var newArray = myArray.reverse(i);
console.log(newArray);

// *************************************************************************************
// *                                                                                   *
// *                                                                                   *
// *                       Iterate with JavaScript For Loops                           *
// *                                                                                   *
// *                                                                                   *
// *************************************************************************************

// For loops are declared with three optional expressions separated by semicolons:
// for ([initialization]; [condition]; [final-expression])
// The initialization statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable.
// The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. When condition is false at the start of the iteration, the loop will stop executing. This means if condition starts as false, your loop will never execute.
// The final-expression is executed at the end of each loop iteration, prior to the next condition check and is usually used to increment or decrement your loop counter.
var myArray1 = [];
for (var i = 1; i < 6; i++){
  myArray1.push(i)
}
console.log(myArray1);

// *************************************************************************************
// *                                                                                   *
// *                                                                                   *
// *                       Iterate Odd Numbers With a For Loop                         *
// *                     Iterate Through an Array with a For Loop                      *
// *                                                                                   *
// *                                                                                   *
// *************************************************************************************
var ourArray1 = [];
for (var i = 0; i < 10; i += 2) {
  ourArray1.push(i);
} console.log(ourArray1);
// ***********************************************************************
var ourArray2 = [];
for (var i = 9; i > 0; i -= 2) {
  ourArray2.push(i);
} console.log(ourArray2);
// ***********************************************************************
// A common task in JavaScript is to iterate through the contents of an array. One way to do that is with a for loop. Remember that arrays have zero-based indexing, which means the last index of the array is length - 1. Our condition for this loop is i < arr.length, which stops the loop when i is equal to length.
// ***********************************************************************
var myArr2 = [ 2, 3, 4, 5, 6];
var total = 0;
for (var i = 0; i < myArr2.length; i++) {
  total += myArr2[i]
} console.log(total);
// ***********************************************************************
var myArr3 = [ 2, 3, 4, 5, 6];
var total3 = 0;
  for (var i = myArr3.length - 1; i >= 0; i--) {
    total3 += myArr3[i];
  } console.log(total3);


  var arr = [
    [1,2], [3,4], [5,6]
  ];
  for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }}

  console.log(arr);
























// **************************THE*END*OF*SCRIPT******************************
