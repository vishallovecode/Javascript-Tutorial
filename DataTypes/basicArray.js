// console.log('Hey This is Basic of array');


// // declaring the array variable  and assigning the empty array

// var employeeData = [] ;

// console.log(employeeData)


// // declaring the array of number 

// var numbers = [30,40,60];

// console.log('numbers' , numbers)


// // declaring the array of string and number

// var data = [20 , 'Twenty', 40, 'Chill'];

// console.log('numbers and string' , data)//

// var dataArray = [12, [234,45] ,  'Hey', {} , true , Symbol(29 ), null , undefined];

// console.log('numbers and string' , dataArray)//


// console.log(typeof dataArray) // 'object'
// //



// var employeeData = [] ;

// console.log(typeof employeeData) // 'object'


// var specialCharactesr = ['.', '%', '&', '*'];



// // Note: Type of array is object (non-primitive data type)


// // Array is non-primitive data type  , and non-primitive datatype is pass as reference(memory)
// // in any of function or at the time of assignment , so when you modified the pass value , 
// // original array will be modified

// function modifiedArray (arr) {
// for(var i=0;i<arr.length;i++) {
//     arr[i]= arr[i]%2==0 ?  true : false
// }
// console.log('1=>' , arr)  // [false, true , false, true, false , true, false]
// }
// var array = [1,2,3,4,5,6,7];
// modifiedArray(array) // here arguments "array" is pass by reference

// console.log('2=>' ,array); // [1, 2,3,4,5,6,7]



// // Dynamic length 


// var array  = [1,3,4,5,6,7];


// array.push(10);
// array.push(10);


// array.length = 5; // here we are assigning length of array to 5 so rest of the element which is present in 
// // 5-1  index will be removed from array
// console.log(array.length)
// console.log(array)



// var array = [];
// array.length = 10;

// console.log(array) // [undefined ,undefined, undefined,undefined,undefined,undefined,undefined,undefined,undefined]
// console.log(array[0]) // undefined
// array[5]= 100

// //  indexOutOfBoundExpection (in java you will get this error if you try to access the  index which greater than or equal to length)
// // Javascript does not give error if you try to access the index  greater than ir equal to length 
// // it will give undefined as output

// var array3 = [3,4];

// console.log(array3[5]) // undefined


 

// Todo:  Map , filter , forEach , reduce , find , findIndex , some  , every  , splice  , slice , shift , unshift , pop , push


// toString()
// Join()
// split()
// push 
// pop
// shift 
// unshift 
// slice 
// splice


var array = [];   

console.log('Hey',array.toString())

 var array  = [1,2,3];

 console.log(array.toString())


 var result  = [] + 'Hello'; // type coercion => ''+'Hello' => 'Hello'
console.log(result) // ?? Hello


 var array  = [1,2,3,4];
 var result  = array + 'Hello';
 console.log(result); // 1,2,3,4Hello


 // []=> this will give 0 when we apply any arithmetic operation 
 var result  = +[]+ 'Hello' ;

 console.log(result)

 var array  = [100, 200, 300];

 var result  = +array+ 'Hello'; //=> NaN + 'Hello' => 'NaN'+ 'Hello'

 console.log(result) // NaNHello

 // parseInt convert first array element into the number
 // + operator convert empty array into 0 but it will give NaN IF there is any element inside the array


 // In boolean empty array is truthy value 


 console.log(Boolean([])) // 