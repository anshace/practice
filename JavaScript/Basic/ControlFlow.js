const loginuer = false

if (loginuer) console.log("Please Enjoy")
else console.log("Please login")

// Using TERNARY Operator:---- ?:
loginuer ? console.log("Please Enjoy") : console.log("Please login")
// Much better way
const message = loginuer ? "Please Enjoy" : "Please login"
console.log(message)

// Type coercion in javascript for false
// Always  try to check them differently IF needed
if (0) console.log("Please Enjoy")
else console.log("Please login")

if (null) console.log("Please Enjoy")
else console.log("Please login")

if (NaN) console.log("Please Enjoy")
else console.log("Please login")

if (undefined) console.log("Please Enjoy")
else console.log("Please login")

// Switch
// Use the break to stop freefall
const animal = "dog"
switch (animal) {
  case "tiger":
  case "cat":
    console.log("cat are cool")
    break
  case "dog":
    console.log("dog are fool")
  default:
    console.log("notthing are good")
}

//              FOR LOOPS
for (let index = 0; index < 5; index++) {
  console.log(index + 1 + " Hello")
}

const arr = [0, 34, 67, 32, 12]

// for-of loop
for (element of arr) console.log(element)

// for-each loop
arr.forEach((element) => console.log(element))

//Break and continue are common

//              WHILE LOOP
const human = {
  name: "Ansh",
  friend: {
    name: "Death",
    friend: {
      name: "Kill",
    },
  },
}

let current = human
while (current.friend != null) {
  console.log(current.friend.name + " is friend of " + current.name)
  current = current.friend
}

// Recursion
// function looprecur() {
//   looprecur()
// }

// looprecur()

//  Short Circuit  Evaluation
function ptrue() {
  console.log("1st")
  return true
}
function pfalse() {
  console.log("2nd")
  return false
}
function ptrue2() {
  console.log("3rd")
  return true
}

ptrue() || pfalse() || ptrue2()
console.log("--------------------------")
ptrue() && (pfalse() || ptrue2())
console.log("--------------------------")
ptrue() || ptrue() || ptrue() || (ptrue() && ptrue2())
console.log("--------------------------")
pfalse() && ptrue2() && ptrue2() && true

const person = {
  address: "Sabour",
}

if (person != null && person.address != null) console.log(person.address)
console.log(person && person.address)
