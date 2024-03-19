console.log('We want to understand diff  b/w let var and const')

//  var is  keyword which we are using from startin to create the variable 
// In es6 (ecmascript 15) javascript has introduced two more keyword  that is 
// let and const
// like var we can use let and const to create the variable  
// there some limitation on let and const which we will discuss point by point below

// 1. Declaring the variable

// Decalraring var variable
var a ;
// Decalraring let variable
let b;
// Decalraring const variable
// const variable cannot be only declare we need to assign the value into const variable while 
// declaring
// below line will give the error
//const c; // 'const' declarations must be initialized

const c = 30; // here  we are declaring the variable and alos assigning the value into it.


console.log('a=> ', a , 'b=> ', b , "c=> ",c)


// 2. Redeclaring the same name variable 

// the variable which is created using var keyword can be redeclared
 var chintu = 'Chintu';
 var chintu= 'NahiHaChintu'; // here i am redeclaring and re assigning the chintu variable

 //  the variable which is created using let keyword cannot be redeclared
 let letter = 'Hey';
//  let letter = 'Letter'; // this line will throw error that cannot re-declare block level variable

// Like let ,variable created using const also cannot be re-declared
const bb =30;
//const bb =40; // it will throw the error 


// 3. Reassigning the value

// we can re-assign the value to the variable created using var keyword
var cc = 30;
cc = 40

// we can re-assign the value to the variable created using let keyword
let ll = 30;
ll = 40


// we cannot re-assign the value to the variable created using const keyword
const cc = 30;
// cc = 40; error:: //  Identifier 'cc' has already been declared

// Todo
// 4 Scope of variable  

//  Var is fucntional scope 
// let and const are block scope

// Todo
// 5. Hoisting
//  variable created using let const and  var are hoisted
// Todo
// 6. TDZ Zone (temporal dead zone)
// let and const will be there is tdz before assigning any value but var variable will be not








