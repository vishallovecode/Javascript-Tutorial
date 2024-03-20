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

var a = 30;

console.log(a);
console.log(window.a);

var n1 = 50;

console.log(n1)


console.log(window)
console.log(this)

console.log(this==window) // true
console.log(this===window) // true

// what happens if i try to change the this in gec

// this = {} // this will throw the error //
// In Gec you cannot assign or update the value of this
console.log('this=>', this)