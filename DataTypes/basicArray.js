// // console.log('Hey This is Basic of array');


// // // declaring the array variable  and assigning the empty array

// // var employeeData = [] ;

// // console.log(employeeData)


// // // declaring the array of number 

// // var numbers = [30,40,60];

// // console.log('numbers' , numbers)


// // // declaring the array of string and number

// // var data = [20 , 'Twenty', 40, 'Chill'];

// // console.log('numbers and string' , data)//

// // var dataArray = [12, [234,45] ,  'Hey', {} , true , Symbol(29 ), null , undefined];

// // console.log('numbers and string' , dataArray)//


// // console.log(typeof dataArray) // 'object'
// // //



// // var employeeData = [] ;

// // console.log(typeof employeeData) // 'object'


// // var specialCharactesr = ['.', '%', '&', '*'];



// // // Note: Type of array is object (non-primitive data type)


// // // Array is non-primitive data type  , and non-primitive datatype is pass as reference(memory)
// // // in any of function or at the time of assignment , so when you modified the pass value , 
// // // original array will be modified

// // function modifiedArray (arr) {
// // for(var i=0;i<arr.length;i++) {
// //     arr[i]= arr[i]%2==0 ?  true : false
// // }
// // console.log('1=>' , arr)  // [false, true , false, true, false , true, false]
// // }
// // var array = [1,2,3,4,5,6,7];
// // modifiedArray(array) // here arguments "array" is pass by reference

// // console.log('2=>' ,array); // [1, 2,3,4,5,6,7]



// // // Dynamic length 


// // var array  = [1,3,4,5,6,7];


// // array.push(10);
// // array.push(10);


// // array.length = 5; // here we are assigning length of array to 5 so rest of the element which is present in 
// // // 5-1  index will be removed from array
// // console.log(array.length)
// // console.log(array)



// // var array = [];
// // array.length = 10;

// // console.log(array) // [undefined ,undefined, undefined,undefined,undefined,undefined,undefined,undefined,undefined]
// // console.log(array[0]) // undefined
// // array[5]= 100

// // //  indexOutOfBoundExpection (in java you will get this error if you try to access the  index which greater than or equal to length)
// // // Javascript does not give error if you try to access the index  greater than ir equal to length 
// // // it will give undefined as output

// // var array3 = [3,4];

// // console.log(array3[5]) // undefined


 

// // Todo:  Map , filter , forEach , reduce , find , findIndex , some  , every  , splice  , slice , shift , unshift , pop , push


// // toString()
// // Join()
// // split()
// // push 
// // pop
// // shift 
// // unshift 
// // slice 
// // splice


// var array = [];   

// console.log('Hey',array.toString())

//  var array  = [1,2,3];

//  console.log(array.toString())


//  var result  = [] + 'Hello'; // type coercion => ''+'Hello' => 'Hello'
// console.log(result) // ?? Hello


// //  var array  = [1,2,3,4];
// //  var result  = array + 'Hello';
// //  console.log(result); // 1,2,3,4Hello


// //  // []=> this will give 0 when we apply any arithmetic operation 
// //  var result  = +[]+ 'Hello' ;

// //  console.log(result)

// //  var array  = [100, 200, 300];

// //  var result  = +array+ 'Hello'; //=> NaN + 'Hello' => 'NaN'+ 'Hello'

// //  console.log(result) // NaNHello

// //  // parseInt convert first array element into the number
// //  // + operator convert empty array into 0 but it will give NaN IF there is any element inside the array


// //  // In boolean empty array is truthy value 


// //  console.log(Boolean([])) // 


// //  // Join method 

// //  // toString() // by default behaviour of join

// //  // toString and Join method both are used to convert array into the number of string
// //  // in toString there will be the resultn with comma seperated 
// //  // but in the case of Join this is default behaviour , you can choose which seperator
// //  // you want to give b/w the elements


// // //  var array = [1,2,3,4]

// // //  console.log(array.join()) //  '1,2,3,4' => default seperated by comma(,)
// // //  console.log(array.toString())  // '1,2,3,4'

// // //  console.log(array.join(" ########## ")) 


// // // Split method are used to convert string into the array on the basis of identifier

// // // Given a paragraph which words are seperated with one single space 
// // // find out how many words are palindrome ?

// // function reverse(s){

// //     //  'hello'=> ['h', 'e' ,'l', 'l', 'o'].reverse( ) => ['o','l','l','e','h']=>  // olleh
// //     return s.split("").reverse().join("");
// // }
// // const paragraph  = 'Hello , kayak find out how many words are palindrome repaper rotator do it yar wow noon deed peep' 

// // function countPalinDrome(para) {
// //         const array  =  para.split(' ');
// //         let count  = 0;
// //        for(let value of array) {
// //             if(value ===reverse(value)) {
// //                 count++

// //             }
// //        }
// //        return count;
// // }
// // var result = countPalinDrome(paragraph)
// // console.log(result)







// // // push // pop

// // // push is use to push the element at the last  and it returns the updated lengt
// // // it modfied original array
// // var array  = [1,2,3,4];

// // console.log('Before push' , array.length , array)
// // var length  = array.push(100);

// // console.log(length , array)



// // // pop is use to remove the element at the last  and it returns the updated removed element
// // // it modfied original array
// // var array  = [1,2,3,100];

// // console.log('Before pop' , array.length , array)
// // var lastElement  = array.pop();

// // console.log(length , array)



// // // we know how to add element in last but how should i add element at the begining
// // // unshift

// // var array  = [1,2,3,6];

// // console.log('Before unshift' , array.length , array)
// // var length  = array.unshift(12 , 24 , 56);

// // console.log(length , array)



// // // i know how to remove last element from array  , but how to remove first element from array  

// // // shift

// // var array  = [1,2,3,6];

// // console.log('Before shift' , array.length , array)
// // var shiftedElement  = array.shift();

// // console.log(shiftedElement , array)


// // unshift and push you can give multiple  items as argument
// // pop and shift return the removed item 
// // unshift and push return the uopdated length


// // map , filter , reduce  (we will writing out own methdos)



// // const replaceCharacter = (s , chartoBeReplaced , what) => {
// //     return s.replcaeAll(chartoBeReplaced , what);
// // }
// // var result = replaceCharacter('Hi I am Don !!!', '!' , '?');
// // console.log(result);


// // // slice() and splice()



// // // slice => this method is used to create a copy of array  (portion of array);
// // // slice(start , end) // start and end are optional , if you dont put any value in start it will take the 0 as a start
// // // end  => if end is undefined  or value is not given then end value will be the length of array
// // // start and end is index of array
// // // end is exlcusive  it will look for the value till end-1

// // var array  = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

// // var slice1 = array.slice() //
// // console.log(slice1)



// // var slice2 = array.slice(0) // if there is only one parameter w epass then it will by defaul start value , here end is not given so end of this sliced array is end of orginal array (means end  == arraylength)
// // console.log(slice2)


// // var slice3 = array.slice(3) // here 3 is start index
// // console.log('slice3', slice3)


// // var slice4 = array.slice(3, 8) // here start index is 3  , slice will return the array starting 3 index and till 7(8-1) index
// // console.log('slice4', slice4)

// // // [1,2,3,4,5,6,7,8,9,10,11,12,13,14]; // indexes => [0,1,2,3,4,5,6,7,8,9,10,11,12,13]

// // //Negative Value will always start form  the end

// // var slice5 = array.slice(-8 , -3); // start  = -8


// // [1,2,3,4,5,6,7,8,9,10,11,12,13,14];  //=>index , [-14 ,-13 ,-12, -11, -10,-9,-8,-7,-6,-5,-4 ,-3 , -2 , -1]

// // console.log('slice5', slice5)
// // console.log('original array' ,array ) //


// // Note-> slice method does effect the original array

// //  ######################################## Splice() ############################

// //Note => Splice Method  are used to removed the element from array or add element into the array
// //Note => This method change the data of original array

// // Syntax => Splice(start , deletecount(how many element you want to delete ) ,  items(items which you want to add))
// // start are index 



// // Adding the element into the array 


// // var employeeName = ['A', 'B','C','D','E','F','G','H','I','J','K'];

// // var splicedData =  employeeName.splice(4 , 0 , 'chipa' , 'ripa' , 'dipa');

// // // what exactly the splice method return  => this will return the array of deleted item

// // console.log('splicedData: ', splicedData, 'original array: ' ,employeeName)

// // // Note => First parameter is from which index you want to do delete or addition operation
// // // Note  => Second paramaetetr(delete count) is how many element you want to delete from first parameteter given value
// // // After second parameter  you can add multiple parameter this all will be added in original from starting index which is given in first parameter



// // // Delete using Splice  



// // var subject = ['E' ,'H', 'C', 'M', 'S','CSE'];

// // // here 2 element is deleted from the array  starting from 1 index .
// // var res = subject.splice(1, 2 , 'rererer');

// // console.log('deleted value:' , res , 'original modified  array:' ,subject )




// // higher order function  



// // function hof (func) {


// //     func()
// // }


// // const call = ()=>{
// //     console.log('Hi')
// // };

// // // var func = call;


// // hof(call)

// // hof(()=>{
// //     console.log('Hi')
// // })




// // // function call (a) {
// // //     // a = r => 100
// // //     console.log(a)
// // // }

// // // var r = 100;

// // // call(r)



// // #################################### forEach() ######################################

// // this is declrative iteration
// // in this iteration you can get both index and value
// // this is higher order method which is given by the javascript 
// // we cann apply this function only one array not  in any another data type or (prototyp TODO)
// // this is use for iteration of array 
// // this hof means it will accept one callback function 
// // forEach Function return undefined

// var interger = [1,2,3,4,5,6,7,89];


// function callback (element , index , originalArray) {
//       originalArray[index]= {element:  element , index: index}
// }

// // forEach is coming from array prototype
// const forEachReturn = interger.forEach(callback);

// console.log(interger , 'forEachReturn', forEachReturn)

// myForEach(interger , callback)


// How javascript implemented forEACH
// Array.prototype.emyForEach = function (callback) {
//     for (let i =0;i<this.length;i++) {
//         callback(this[i] , i , this)
//     }
// }


// our function which behave like forEach
// function myForEach(array , callback) {
//         for (let i =0;i<array.length;i++) {
//             callback(array[i] , i , array)
//         }
// }


// var array  = [1,3,4];

// array.forEach((elem , index , array)=>{
//     console.log(elem)
// })


// ############################# map ############################

// this is higher order functions 
// this is use for iteration of the array 
// map method are declarative (pre declared , we cannote changes flow of it)
// unlike forEach, map will return a new array 
// this map method can be apply only in array like forEach
// it will accept one callback functions


var array  = [4,9, 10, 14, 13 , 19 , 30 , 33, 21];

const callback = (element , index , originalArray) => {
     if(element%2 ==0) {
        return 'even'
     }
}

const newArray  = array.map(callback);


const newArray2  = array.map((elem , index)=>{
    if(elem%2 ==0) {
        return 'even'
     } else {
        return 'odd'
     }
});

const newArray3 =  array.map((elem)=> elem%2 ==0)
console.log(newArray , newArray2 , newArray3)


