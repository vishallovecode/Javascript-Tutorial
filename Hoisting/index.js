// console.log('Relax......😀')

// Scope
// Hoisting
// TDZ(temporal dead zone)
// block scope
// functional scope
// window  (done)
// this 
// context
// execution context
// lexical scoping
// lexical environment
// code execution 
// CallStack
// Gloabal Execution Context
// Functional Execution Context


// window is object which is represent of global memory 

// Global Execution Context => Whenever your javascript code is started executing by browser or nodesjs server
// than GEC will be created , this is the top level of execution wherer all JS code execute 
// All the variable define in context will be part of Global object which is equivalent to the window object
// In global execution context this will be pointed to the window  , meand this will be bind with window 
// the value of this will be window
// GEC is combination of memory and thread of execution (code running) //


// Example 1
// var a = 30;

// console.log(a);
// // console.log(window.a);

// var n1 = 50*a;

// console.log(n1)


// console.log(window)
// console.log(this)

// console.log(this==window) // true
// console.log(this===window) // true

// // what happens if i try to change the this in gec

// // this = {} // this will throw the error //
// // In Gec you cannot assign or update the value of this
// console.log('this=>', this)



// Example 2

// console.log(a1) //  undefined

// var a1 = 30;

// console.log(a1) //  30


// Example 3
console.log(c1); // we are accessing c1 before declaraion 

// console.log(b1) // 

// console.log(d1)

let b1 = 60;
 
var c1 = 40;

const d1 = 90;

console.log(b1)

console.log(d1)

// let and const will get the different scope that is script scope  , the variable which is not in global
// scope Js cannot allow to access before initialization
// Means let and const are not the part of global memory so they will not accessibke before the initialization


// What is hoisting ?
// hoisting is the memory assignment phase due to that 
// variablecan be access top of it declaration

// Does let and const are hoisted ?

// Let const and var are hoisted  , but let and const are in different scope 
// we cannot access before initialization
