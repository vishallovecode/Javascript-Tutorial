
//  Boolean type or variable can have only two values
// True or False

var check = true ;

var notCheck  = false;

console.log(typeof check); // boolean
console.log(typeof notCheck); //  boolean

// Note: 1 In javascript  , all the values except zero(number) and empty string consider as a true value , 
//empty string , null , undefined and  0 is consider as a false

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




// '' =>  boolean  => true
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

