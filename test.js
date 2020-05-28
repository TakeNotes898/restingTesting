// If statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as Boolean conditions and they may only be true or false.

function trueOrFalse(wasThatTrue) {
if (wasThatTrue) {
  return "Yes, that was true";
}
return "No, that was false";
}

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
} console.log(testElse(4));

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
// *                          Golf Code                                                *
// *                                                                                   *
// *                                                                                   *
// *************************************************************************************


var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
if (strokes === 1){
  return names[0];
}else if (strokes <= par - 2){
  return names[1];
}else if (strokes <= par - 1){
  return names[2];
}else if (strokes === par){
  return names[3];
}else if (strokes <= par + 1){
  return names[4];
}else if (strokes <= par + 2){
  return names[5];
}else if (strokes >= par + 3){
  return names[6];
}else {
  return "Change Me";
}};

console.log(golfScore(4, 1));
console.log(golfScore(4, 2));
console.log(golfScore(5, 2));
console.log(golfScore(4, 3));
console.log(golfScore(4, 4));
console.log(golfScore(1, 1));
console.log(golfScore(5, 5));
console.log(golfScore(4, 5));
console.log(golfScore(4, 6));
console.log(golfScore(4, 7));
console.log(golfScore(5, 9));

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
}console.log(switchOfStuff("a"));

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
}console.log(sequentialSizes(4));


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
} console.log(myFun());


function abTest(a, b) {
if (a < 0 || b < 0){
  return;
} return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(2,2));


// *************************************************************************************
// *                                                                                   *
// *                                                                                   *
// *                   Counting Card Game BlackJack                                    *
// *                                                                                   *
// *                                                                                   *
// *************************************************************************************
// In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.
// Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.
// Count Change: +1; 	Cards: 2, 3, 4, 5, 6
// Count Change: 0;  	Cards: 7, 8, 9
// Count Change: -1; 	Cards: 10, 'J', 'Q', 'K', 'A'


var count = 0;

function cc(card) {
  if (card == 2 || card == 3 || card == 4 || card == 5 || card == 6){
    count +1;
  }if (card == 7 || card == 8 || card == 9){
    count = 0;
  }if(card == 10 || card == "J" || card == "Q" || card == "K" || card == "A"){
    count = -1;
  }
  return count;
}

console.log(cc(2, 3, 7, 'K', 'A'));
