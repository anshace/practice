/**
    ALL ABOUT THE VARAIABLE.. 
 */

// number type variable
let favnumber = 90
console.log(favnumber)
console.log(typeof favnumber)

let a = 56
let b = favnumber
console.log(a)
console.log(b)

// FIXME string type
let sta = "Ansh  says,'hello World'"
let stb = "to everyone."
console.log(typeof sta)
console.log(sta + " " + stb)

//  Boolean
let bool = true
let boolnot = false
console.log(typeof bool)
console.log(!boolnot)
// Order of operation && is greater than ||
console.log(bool || (boolnot && true))
console.log((bool && boolnot) || true)

// Null and undefined
let some = undefined
let und
console.log(some)
console.log(typeof some)
console.log(typeof und)
let nothing = null
console.log(nothing)
console.log(typeof nothing)

// Comperator
let vara = 89
let varb = "89"
console.log(vara == varb)
console.log(vara === varb)
// it compare the value lexographically
console.log("6" > varb)
console.log("80" < varb)
console.log("889" < varb)
