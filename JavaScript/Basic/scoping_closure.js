/**
 *
 * Scoping- The scope of the variable.
 * It is always Inside-out.
 * From inside you can acess everything that is outside of you.
 * from outside ,you cannot see what is inside.
 *
 */

let a = "outside"
console.log("A = " + a)
// console.log("B = " + b) // b is not accessable..
// console.log("C = " + c) // c is not accessable..
{
  let a = "1st block reassigned"
  let b = "1st block"
  console.log("A = " + a)
  console.log("B = " + b)
  console.log("B = " + b) // b is not accessable..
  //   console.log("C = " + c) // c is not accessable..
  {
    let a = "2nd block reassigned" // a is reassigned
    let b = "2nd block reassigned" // b is reassigned
    let c = "2nd Block"
    console.log("A = " + a)
    console.log("B = " + b)
    console.log("C = " + c)
  }
}

/**
 *
 * Closures:
 *
 *
 */

function func1(var1) {
  let var3 = 99
  return function func2(var2) {
    console.log(var1)
    console.log(var2)
    console.log(var3)
  }
}

let newfunc = func1(90)
newfunc(77)

if (Math.random() > 0.5) {
  var x = 1
} else {
  var x = 2
}
console.log(x)
