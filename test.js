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
  }
  else {
    result = "5 or Smaller";
  }
  return result;
}

console.log(testElse(4));
