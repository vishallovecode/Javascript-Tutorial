
//  Boolean type or variable can have only two values
// True or False

var check = true ;

var notCheck  = false;

console.log(typeof check); // boolean
console.log(typeof notCheck); //  boolean

// Note: 1 In javascript  , all the values except zero(number) and empty string consider as a true value , 
//empty string ('') , null , undefined and  0 is consider as a false

if(check) {
    console.log('I am inside 1 if')
} else {
    console.log('I am inside first else') 
}
 
if(notCheck) {
    console.log('I am inside 2 if')
} else {
    console.log('I am inside second else') 
}


var emptyString = ''
var zero = 0;
var someValue = 'A'
var someNumber = 2;




// '' =>  boolean  => false
if(emptyString) {
    console.log('emptyString if')
} else {
    console.log('emptyString else')
}

if(zero) {
    console.log('zero if')
} else {
    console.log('zero else')
}

if(someValue) {
    console.log('someValue if')
} else {
    console.log('someValue else')
}

if(someNumber) {
    console.log('someNumber if')
} else {
    console.log('someNumber else')
}


var data  = [];
if(data) {
    console.log('data')
}




// Throughout your career 


// Logical Operator



//  || , && , ! , ?? (Nullish Coalescing )

// OR (||)
console.log('true ||  false' , true ||  false) // true
console.log('false ||  true' ,false ||  true) // true

console.log(1 || 2 || 3 || 4 || 5 || 6 || 0) // 


console.log("'' || false || 0 || 4 || 5 || 6 || 0 => " , '' || false || 0 || 4 || 5 || 6 || 0) // 

const result  = (100/100 -1) ||  2;

console.log(result)


//  AND (&&)

//this will return false if anyone the condition gives falsy value , whenever it get falsy value
// it will return false and stop execution


function call () {
    console.log('hey call')
    return true;
}


var result2 =  2 && 3 && 4 && 0 && call();
console.log('result2' , result2)



if(8>7 && 5<6 && 2>3 && call()) {
     console.log('Hey')
} else {
     console.log('hey else')
}

if(8>7 & 5<6 & 2>3 & call()) {
    console.log('Hey')
} else {
    console.log('hey else')
}

// Not operator
// it will do the things in oposite

var res1 =  !2; 
console.log(res1)

console.log(typeof !3)

console.log(!0)


//  Ternary Operation