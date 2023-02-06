console.log("Hello World")

function print(str) {
  console.log(str)
}

// * OPERATORS IN JavaScript
// var c=0
// c=c+1;
// print(c);
// c+=1; // c++ or ++c is applicable;
// print(c)
// c=5/3
// print(c)
// c=5%3
// print(c)
// c=(5/3>>0)
// c=~~(5/3)
// c=(5/3|0)
// print(c)

// * String  in the javascript are "..." , '...' or `....`.
// print("Good Morning ,\"Ansh Roshan\".");
// // Declare the variable in
// var st="Ansh";
// let a='short'
// print([st,a])
// //It will be global .ie even if defined within function or
// //  inner block but can be accessed outside
// glob=90
// // The value wil be constant and will not change.
// const pi=3.142;
// print(st.length);
// print(st[2]);
// print(st[st.length-1]);// last letter

// * Arrays
// var arr=['Ansh',23,667.6,["hello","ansh",9]]
// print(arr);
// // arr+=10
// // it is useless  and create problems
// // It append the array At the end
// arr.push(["Good","Morning"]);
// print(arr);
// // It insert at Start of the array .
// arr.unshift('Start')
// print(arr);
// // Pop out last element
// arr.pop()
// print(arr)
// // It pop the first  element in the array
// arr.shift()
// print(arr);

// * Function an return
// function func(a,b){
//     return [a+b,a-b,a*b,a/b];
// }
// print(func(67,89))

//  *Local variable have high precedence than global variable.
// var glob="Global"
// sup="Super"
// let out="Outside"
// function test() {
//     var glob="Local"
//     var sub="Inner"
//     let out="Inside"
//     globa="I am inside but acessable"
//     print(glob)
//     print(sub)
//     print(out)
// }
// test()
// print(globa)

// function queue(arr,item){
//     arr.push(item)
//     return arr.shift()
// }
// var arr=[1,2,3,4,5,6,7,8,9]
// print("Before: " +JSON.stringify(arr))
// print(queue(arr,10))
// print("After: " +JSON.stringify(arr))

// check(12)
// function check(val) {
//     if (val==12)
//         print("True 12=='12'")
//     else
//         print("False 12=='12'")

//     if (val===12)
//         print("True 12==='12'")
//     else
//         print("False 12==='12'")
// }

// *Switch Case Statement
// var key='1'
// switch (key) {
//     case 1:
//     case "one"  :
//     case "1":
//         print("First")
//         break;
//     case 2:
//     case "II":
//     case "2":
//         print("Second")
//         break;
//     default:
//         break;
// }

// *  Using the Object instead of switch
// var day={
//     1:"First",
//     2:"Second",
//     3:"Third"
// }
// print(day[1])

// * Object In the JavaScript
var obj = {
  name: "Ansh Roshan",
  sem: "4th Semester",
  roll: "20329",
  add: "Village-Khankitta,PO+PS-Sabour",
  marks: {
    1: 9.14,
    2: 7.02,
    3: 7.14,
    total: 7.72,
  },
}
print(obj.sem + "\n" + obj.add + "\n" + obj.name)

// Adding Properties in Objecs
obj.reg = "20103108018"
print(obj.reg)
// Updating Properties in Objecs
obj.reg = "18"
print(obj)
// Deleting Properties in Objecs
delete obj.reg
print(obj)
// Checking the property
print(obj.hasOwnProperty("reg"))
// use only in oneword of alphabet
print(obj.marks.total)
// @ better way
print(obj["marks"]["total"])
print(obj["marks"][1])
