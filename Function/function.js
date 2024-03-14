console.log('Functions In Javascript')


// actions  === functions

// functions  => we write the block of the code to perform specific actions or task , this called functions


//  function declration

// function functionName (param1 , param2 , param3) {
//    // action
//    // function body
// }


// write a function to multiply by 2 and print the output

// this function will take one single number , and multiply it by 2 and console the o/p
function multiplyByTwo(a) {
    var result  = a*2;
    console.log(result);
}

// multiplyByTwo(arg1) //  argument
multiplyByTwo(30); // function call , invoked function 
multiplyByTwo(60)

// function invocation 
// arguments 



// create a function which will divide by 3 and return the result


function divideByThree (a) {
    var result  =  a/3;
    return result;
    // line no 41 code is unrechable , after return statement in functions code is not execute
    console.log('hey')
}

var  two = divideByThree(4);

console.log(two);


// if there is no return in js function than js return undefined

function callMe () {
 // default js return the undefined
 console.log('Checker123')
//  return undefined
}


var result  = callMe();
console.log(result) // undefined



console.log(callMe()); //  checker and undefined


// interview 

function getName () {
    var b ='Vishal';
    return 
      b;
}

console.log('checking',getName()); // undefined



function printData(data) {
     console.log(data); // 
}



printData(true)// boolean
printData(2)// number
printData([1,2,3]); // array
printData({a:2}); //  object
printData("Hello") // string


printData(); //  undefined

printData(2,'Hello', 'Hi ', 'sahi' , 'hai') // 

// if there is no argument passed respected to the declare parameter , 
// that parameter value will be undefined



// default parameters in javascript  function
// if there argument passed corresponding to the params then params 
// will get that value else it will get the default value


// create a function which will take first argument as value and second as multiplier 
// you need to return the multiply of this two,  if there is not multiplier passed as argument consider
// that as 2

function multiplyByNumberOr2(value , multiplier) {
        return value*multiplier;
}

multiplyByNumberOr2(10 , 10) // 10

var result  =multiplyByNumberOr2(10) // 
console.log(result) //      NaN



function multiplyByNumberOr3(value , multiplier=3) { // here three is default value
    return value*multiplier;
}

var res = multiplyByNumberOr3(10 , 10) // 100
console.log(res) // 100


var result  =multiplyByNumberOr3(10) // 
console.log(result) //      30





// interview 

function returnNumber () {
    return ; '9915378881'
}


console.log(returnNumber()); // undefined



// anonymous function
// the functions which is not  named  .




var a = function ()  {
    console.log('Hey')
}



a() // hey


// TODO: functoon statement vs function expression in details
// function expression  => If we  assign the  function in variable that is called function expression
 var b = function getFullName() {
    console.log('Surprise !!!!');
 }
//  b() // ?? 

 console.log(b) //  function itself
 console.log(b()) //  Surprise !!!!
 //console.log(getFullName) // this will throw error here js neglect name of function in function expression



// if there is no variable defined or declared in js then js gives referenece error

// Types of function

// diff  b/w normal function and arrow functions in terms of "this"
// arrow functions




function getFullName() {
    console.log('Surprise !!!!');
 }

  //console.log(getFullName) / function


  // we can do whatever we can do with function  
  // we can assign function into variable  
  // we can pass any number of arguments
  // we can pass any type of data in arguments 


  // we can pass function as a arguments

// here we are accepting function as  parameter
// the function which accept the function as parameter is called higher order functions



  function multiplyThree(func , a) {
    // func  => callback  function
        // console.log(func) //  this will print whole function  // function multiplyTwoDigit(a,b) {return a*b}
        var result  = func(30, 30); //  900
        return result *a // 27000
  }


  function multiplyTwoDigit(a,b) {return a*b}

  //the function which is passed as arguments is called as callback function
  multiplyThree(multiplyTwoDigit , 30); // here we are passing  the function as arguments 




  // this is  higher order funtion which takes first parameter as callback function  , 
//   second parameter as delay means after how much time delay we want to execute that function

function callBack () {
    console.log('I will call later');
}
// todo:
  setTimeout(callBack , 5000);

  // function 
  // return  keyword 
  // parameters 
  // arguments
  // higher order function 
  // callback function 
  // function expression  
  // function declration 
  // anonymour function 
  // we cann assign function to variable



function func () {
    console.log('hey')
}

function func () {
    console.log('Hey2')
}


console.log(typeof func) // 'function'

func(); //  Hey2

// IIFE  (Immediately Invoked Functions     Expressions)
// The function is called as soon as function is created ,  this type of function does 
// not need explicit call or invoked
// IIFE functions reference will be not available in memory for later use like another function , 
// this will help us to optimized memory and removed unnecessary function reference from memory
// this type of the function called only once. so we dont need referece to store for further call


(
    function (a, b,c) {
        console.log('hey i am Invoked immediately' , a,b,c)
    }
) (10 , 20 , 30);


//

func ();


function getName() {
    console.log('Hey')
}


getName();





//  Youtube  => Link=> Amazon => Amazon  
// B2B  => 5000 

//  

// 
// IIFE
 var b = (
    function (a) {
        console.log(a);
        return a ;
    }
) (20);



console.log(b)


//
//  var dataChecker = function () {

//  }
// // typeof dataChecker => function

// var dataChecker = function  () {

// }


function HOF (callback) {
    // callback = function (){console.log('hey')}
   callback();
}


var call1= function (){console.log('hey')}

console.log(call1) // function (){console.log('hey')}

HOF(call1) ; //  hey 

HOF(function (){console.log('hey')})


//


//Arrow function 

var printFullName = ()=> {
    console.log('Hey, I am arrow function....')
}

printFullName(); //Hey, I am arrow function....



// var multiplyEachParam =(a,b,c,d) =>  {
//     return  a*b*c*d;
// }
// below code are shortand of above code

var multiplyEachParam =(a,b,c,d) => a*b*c*d;

var res = multiplyEachParam(20, 30, 40,40);

console.log(res)