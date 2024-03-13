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



function multiplyByNumberOr3(value , multiplier=3) {
    return value*multiplier;
}

var res = multiplyByNumberOr3(10 , 10) // 100
console.log(res) // 100


var result  =multiplyByNumberOr3(10) // 
console.log(result) //      30