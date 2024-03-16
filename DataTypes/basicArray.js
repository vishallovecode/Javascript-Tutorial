console.log('Hey This is Basic of array');


// declaring the array variable  and assigning the empty array

var employeeData = [] ;

console.log(employeeData)


// declaring the array of number 

var numbers = [30,40,60];

console.log('numbers' , numbers)


// declaring the array of string and number

var data = [20 , 'Twenty', 40, 'Chill'];

console.log('numbers and string' , data)//

var dataArray = [12, [234,45] ,  'Hey', {} , true , Symbol(29 ), null , undefined];

console.log('numbers and string' , dataArray)//


console.log(typeof dataArray) // 'object'
//



var employeeData = [] ;

console.log(typeof employeeData) // 'object'


var specialCharactesr = ['.', '%', '&', '*'];



// Note: Type of array is object (non-primitive data type)


// Array is non-primitive data type  , and non-primitive datatype is pass as reference(memory)
// in any of function or at the time of assignment , so when you modified the pass value , 
// original array will be modified

function modifiedArray (arr) {
for(var i=0;i<arr.length;i++) {
    arr[i]= arr[i]%2==0 ?  true : false
}
console.log('1=>' , arr)  // [false, true , false, true, false , true, false]
}
var array = [1,2,3,4,5,6,7];
modifiedArray(array) // here arguments "array" is pass by reference

console.log('2=>' ,array); // [1, 2,3,4,5,6,7]



// Dyanamic
