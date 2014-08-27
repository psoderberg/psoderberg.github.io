// I worked by myself on this challenge.

// __________________________________________
// Write your code below.

var secretNumber = 7;

var password = "just open the door";

var allowedIn = {};

var members = [];

allowedIn = false;

members = ["John", "John", "John", "Mary", "John", "John", "John",];






// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here.
Good intro to test-driven development. I lost my pseudocode to this, and I've come to realize how important good pseudocode is.  Even so I think I got a lot out of this.  I struggled getting node going. At first I thought it wasn't working, so I quickly gave up and used a browser console.  Later I looked at the elipses I was seeing and realized that I was working on code in node, rather than just running a js file.


// __________________________________________
// Test Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

