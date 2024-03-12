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
}

var  two = divideByThree(4);

console.log(two);


