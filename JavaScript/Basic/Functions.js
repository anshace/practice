// Function
function sayhello(name) {
  console.log("Good morning.")
  console.log("Hello " + name)
}
sayhello("Ansh")
sayhello("P.K")

// Operation in the Function
function twomath(a, b) {
  console.log(a / b + "  " + (a % b) + " " + (a - (a % b)) / b)
}
twomath(89, 4)

// Return in function
function welcome(name) {
  return "Hello MR. " + name + " ,you are welcome here..."
  console.log("It will never Run .")
}
console.log(welcome("Ansh Roshan"))

// !@            Passing Function as Arguements
// it return the function defination
console.log(welcome)

function func(x) {
  return x("Ansh " + "Roshan")
}

console.log(func(welcome))

// Main example of pasing the function

function sumcallback(a, b, calling_func) {
  calling_func(a + b)
}

function called_func(something) {
  console.log(something)
}

// Whenever pssing the function as the parameter
// DONOT use the parenthesis.
sumcallback(90, 768, called_func)

// Anonymous Function
//remember the syntax
sumcallback(90, 768, function (vara) {
  console.log(vara)
})

// More Shortcut in Anonymous function
sumcallback(90, 768, (vara) => {
  console.log(vara)
})

// !@            Arrrow Function
let hello = (name) => {
  console.log("Hello ," + name)
}
hello("Ansh")

// Better way
let hi = (name) => console.log("Hi, " + name)
hi("Ansh Roshan")

/**
function sum(a, b) {
  return a + b
}
*/

// Using the arrow fumction
let sumarrow = (a, b) => {
  return a + b
}
console.log(sumarrow(78, 90))

// Best way for the small methods
let sum_arrows = (a, b) => a + b
console.log(sum_arrows(78, 90))

// @@  Info

/**
 * Function are hoisting.
 * The are moved at the top by the of the file.so even if,
 * We call the function before it is declare ,it's alright.
 * TODO:- so we can write all the helper function at very bottom
 *
 * Arrow function are not hoisted.
 * So, if we call the arrow  function in the file ,
 * before it is defined it will throw the error.
 */
