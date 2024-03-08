
var  age =  30 ;

var isPersonUnderAge  = age>=18 ? false: true; 

// if(age>=18) {
//     isPersonUnderAge = false
// } else {
//     isPersonUnderAge = true
// }


if(isPersonUnderAge) {
    // write some bigger code
} else {
 // write some bigger
}

// Ternary operator is more performatic than if else


var b =50;

function sum () {
    return b+50;
}

var c = b + sum();


 console.log(1<2<3) // true
 console.log(3>2>1) // false


 console.log("2" < 3);  

 console.log("A" < "B"); 
 
 console.log("2" < 3);  // true

 console.log('' <  3); //  falsyValue <3 => 0<3 => true


 console.log("a">"2"); //  

console.log("a" > 2); // here JS is considering the 'a' as a truthy value so that is converted into the number the value of truthy  value in number is 1  
// as result 1>2 => false
