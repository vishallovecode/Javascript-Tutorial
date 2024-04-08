// // // console.log('Hey This is Basic of array');


// // // // declaring the array variable  and assigning the empty array

// // // var employeeData = [] ;

// // // console.log(employeeData)


// // // // declaring the array of number 

// // // var numbers = [30,40,60];

// // // console.log('numbers' , numbers)


// // // // declaring the array of string and number

// // // var data = [20 , 'Twenty', 40, 'Chill'];

// // // console.log('numbers and string' , data)//

// // // var dataArray = [12, [234,45] ,  'Hey', {} , true , Symbol(29 ), null , undefined];

// // // console.log('numbers and string' , dataArray)//


// // // console.log(typeof dataArray) // 'object'
// // // //



// // // var employeeData = [] ;

// // // console.log(typeof employeeData) // 'object'


// // // var specialCharactesr = ['.', '%', '&', '*'];



// // // // Note: Type of array is object (non-primitive data type)


// // // // Array is non-primitive data type  , and non-primitive datatype is pass as reference(memory)
// // // // in any of function or at the time of assignment , so when you modified the pass value , 
// // // // original array will be modified

// // // function modifiedArray (arr) {
// // // for(var i=0;i<arr.length;i++) {
// // //     arr[i]= arr[i]%2==0 ?  true : false
// // // }
// // // console.log('1=>' , arr)  // [false, true , false, true, false , true, false]
// // // }
// // // var array = [1,2,3,4,5,6,7];
// // // modifiedArray(array) // here arguments "array" is pass by reference

// // // console.log('2=>' ,array); // [1, 2,3,4,5,6,7]



// // // // Dynamic length 


// // // var array  = [1,3,4,5,6,7];


// // // array.push(10);
// // // array.push(10);


// // // array.length = 5; // here we are assigning length of array to 5 so rest of the element which is present in 
// // // // 5-1  index will be removed from array
// // // console.log(array.length)
// // // console.log(array)



// // // var array = [];
// // // array.length = 10;

// // // console.log(array) // [undefined ,undefined, undefined,undefined,undefined,undefined,undefined,undefined,undefined]
// // // console.log(array[0]) // undefined
// // // array[5]= 100

// // // //  indexOutOfBoundExpection (in java you will get this error if you try to access the  index which greater than or equal to length)
// // // // Javascript does not give error if you try to access the index  greater than ir equal to length 
// // // // it will give undefined as output

// // // var array3 = [3,4];

// // // console.log(array3[5]) // undefined


 

// // // Todo:  Map , filter , forEach , reduce , find , findIndex , some  , every  , splice  , slice , shift , unshift , pop , push


// // // toString()
// // // Join()
// // // split()
// // // push 
// // // pop
// // // shift 
// // // unshift 
// // // slice 
// // // splice


// // var array = [];   

// // console.log('Hey',array.toString())

// //  var array  = [1,2,3];

// //  console.log(array.toString())


// //  var result  = [] + 'Hello'; // type coercion => ''+'Hello' => 'Hello'
// // console.log(result) // ?? Hello


// // //  var array  = [1,2,3,4];
// // //  var result  = array + 'Hello';
// // //  console.log(result); // 1,2,3,4Hello


// // //  // []=> this will give 0 when we apply any arithmetic operation 
// // //  var result  = +[]+ 'Hello' ;

// // //  console.log(result)

// // //  var array  = [100, 200, 300];

// // //  var result  = +array+ 'Hello'; //=> NaN + 'Hello' => 'NaN'+ 'Hello'

// // //  console.log(result) // NaNHello

// // //  // parseInt convert first array element into the number
// // //  // + operator convert empty array into 0 but it will give NaN IF there is any element inside the array


// // //  // In boolean empty array is truthy value 


// // //  console.log(Boolean([])) // 


// // //  // Join method 

// // //  // toString() // by default behaviour of join

// // //  // toString and Join method both are used to convert array into the number of string
// // //  // in toString there will be the resultn with comma seperated 
// // //  // but in the case of Join this is default behaviour , you can choose which seperator
// // //  // you want to give b/w the elements


// // // //  var array = [1,2,3,4]

// // // //  console.log(array.join()) //  '1,2,3,4' => default seperated by comma(,)
// // // //  console.log(array.toString())  // '1,2,3,4'

// // // //  console.log(array.join(" ########## ")) 


// // // // Split method are used to convert string into the array on the basis of identifier

// // // // Given a paragraph which words are seperated with one single space 
// // // // find out how many words are palindrome ?

// // // function reverse(s){

// // //     //  'hello'=> ['h', 'e' ,'l', 'l', 'o'].reverse( ) => ['o','l','l','e','h']=>  // olleh
// // //     return s.split("").reverse().join("");
// // // }
// // // const paragraph  = 'Hello , kayak find out how many words are palindrome repaper rotator do it yar wow noon deed peep' 

// // // function countPalinDrome(para) {
// // //         const array  =  para.split(' ');
// // //         let count  = 0;
// // //        for(let value of array) {
// // //             if(value ===reverse(value)) {
// // //                 count++

// // //             }
// // //        }
// // //        return count;
// // // }
// // // var result = countPalinDrome(paragraph)
// // // console.log(result)







// // // // push // pop

// // // // push is use to push the element at the last  and it returns the updated lengt
// // // // it modfied original array
// // // var array  = [1,2,3,4];

// // // console.log('Before push' , array.length , array)
// // // var length  = array.push(100);

// // // console.log(length , array)



// // // // pop is use to remove the element at the last  and it returns the updated removed element
// // // // it modfied original array
// // // var array  = [1,2,3,100];

// // // console.log('Before pop' , array.length , array)
// // // var lastElement  = array.pop();

// // // console.log(length , array)



// // // // we know how to add element in last but how should i add element at the begining
// // // // unshift

// // // var array  = [1,2,3,6];

// // // console.log('Before unshift' , array.length , array)
// // // var length  = array.unshift(12 , 24 , 56);

// // // console.log(length , array)



// // // // i know how to remove last element from array  , but how to remove first element from array  

// // // // shift

// // // var array  = [1,2,3,6];

// // // console.log('Before shift' , array.length , array)
// // // var shiftedElement  = array.shift();

// // // console.log(shiftedElement , array)


// // // unshift and push you can give multiple  items as argument
// // // pop and shift return the removed item 
// // // unshift and push return the uopdated length


// // // map , filter , reduce  (we will writing out own methdos)



// // // const replaceCharacter = (s , chartoBeReplaced , what) => {
// // //     return s.replcaeAll(chartoBeReplaced , what);
// // // }
// // // var result = replaceCharacter('Hi I am Don !!!', '!' , '?');
// // // console.log(result);


// // // // slice() and splice()



// // // // slice => this method is used to create a copy of array  (portion of array);
// // // // slice(start , end) // start and end are optional , if you dont put any value in start it will take the 0 as a start
// // // // end  => if end is undefined  or value is not given then end value will be the length of array
// // // // start and end is index of array
// // // // end is exlcusive  it will look for the value till end-1

// // // var array  = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

// // // var slice1 = array.slice() //
// // // console.log(slice1)



// // // var slice2 = array.slice(0) // if there is only one parameter w epass then it will by defaul start value , here end is not given so end of this sliced array is end of orginal array (means end  == arraylength)
// // // console.log(slice2)


// // // // var slice3 = array.slice(3) // here 3 is start index
// // // // console.log('slice3', slice3)


// // // // var slice4 = array.slice(3, 8) // here start index is 3  , slice will return the array starting 3 index and till 7(8-1) index
// // // // console.log('slice4', slice4)

// // // // // [1,2,3,4,5,6,7,8,9,10,11,12,13,14]; // indexes => [0,1,2,3,4,5,6,7,8,9,10,11,12,13]

// // // // //Negative Value will always start form  the end

// // // // var slice5 = array.slice(-8 , -3); // start  = -8


// // // // [1,2,3,4,5,6,7,8,9,10,11,12,13,14];  //=>index , [-14 ,-13 ,-12, -11, -10,-9,-8,-7,-6,-5,-4 ,-3 , -2 , -1]

// // // // console.log('slice5', slice5)
// // // // console.log('original array' ,array ) //


// // // // Note-> slice method does effect the original array

// // // //  ######################################## Splice() ############################

// // // //Note => Splice Method  are used to removed the element from array or add element into the array
// // // //Note => This method change the data of original array

// // // // Syntax => Splice(start , deletecount(how many element you want to delete ) ,  items(items which you want to add))
// // // // start are index 



// // // // Adding the element into the array 


// // // // var employeeName = ['A', 'B','C','D','E','F','G','H','I','J','K'];

// // // // var splicedData =  employeeName.splice(4 , 0 , 'chipa' , 'ripa' , 'dipa');

// // // // // what exactly the splice method return  => this will return the array of deleted item

// // // // console.log('splicedData: ', splicedData, 'original array: ' ,employeeName)

// // // // // Note => First parameter is from which index you want to do delete or addition operation
// // // // // Note  => Second paramaetetr(delete count) is how many element you want to delete from first parameteter given value
// // // // // After second parameter  you can add multiple parameter this all will be added in original from starting index which is given in first parameter



// // // // // Delete using Splice  



// // // // var subject = ['E' ,'H', 'C', 'M', 'S','CSE'];

// // // // // here 2 element is deleted from the array  starting from 1 index .
// // // // var res = subject.splice(1, 2 , 'rererer');

// // // // console.log('deleted value:' , res , 'original modified  array:' ,subject )




// // // // higher order function  



// // // // function hof (func) {


// // // //     func()
// // // // }


// // // // const call = ()=>{
// // // //     console.log('Hi')
// // // // };

// // // // // var func = call;


// // // // hof(call)

// // // // hof(()=>{
// // // //     console.log('Hi')
// // // // })




// // // // // function call (a) {
// // // // //     // a = r => 100
// // // // //     console.log(a)
// // // // // }

// // // // // var r = 100;

// // // // // call(r)



// // // // #################################### forEach() ######################################

// // // // this is declrative iteration
// // // // in this iteration you can get both index and value
// // // // this is higher order method which is given by the javascript 
// // // // we cann apply this function only one array not  in any another data type or (prototyp TODO)
// // // // this is use for iteration of array 
// // // // this hof means it will accept one callback function 
// // // // forEach Function return undefined

// // // var interger = [1,2,3,4,5,6,7,89];


// // // function callback (element , index , originalArray) {
// // //       originalArray[index]= {element:  element , index: index}
// // // }

// // // // forEach is coming from array prototype
// // // // const forEachReturn = interger.forEach(callback);

// // // // console.log(interger , 'forEachReturn', forEachReturn)

// // // // myForEach(interger , callback)


// // // // How javascript implemented forEACH
// // // // Array.prototype.emyForEach = function (callback) {
// // // //     for (let i =0;i<this.length;i++) {
// // // //         callback(this[i] , i , this)
// // // //     }
// // // // }


// // // // our function which behave like forEach
// // // // function myForEach(array , callback) {
// // // //         for (let i =0;i<array.length;i++) {
// // // //             callback(array[i] , i , array)
// // // //         }
// // // // }


// // // // var array  = [1,3,4];

// // // // array.forEach((elem , index , array)=>{
// // // //     console.log(elem)
// // // // })


// // // // ############################# map ############################

// // // // this is higher order functions 
// // // // this is use for iteration of the array 
// // // // map method are declarative (pre declared , we cannote changes flow of it)
// // // // unlike forEach, map will return a new array 
// // // // this map method can be apply only in array like forEach
// // // // it will accept one callback functions


// // // var array  = [4,9, 10, 14, 13 , 19 , 30 , 33, 21];

// // // const callback = (element , index , originalArray) => {
// // //      if(element%2 ==0) {
// // //         return 'even'
// // //      }
// // // }

// // // const newArray  = array.map(callback);


// // // const newArray2  = array.map((elem , index)=>{
// // //     if(elem%2 ==0) {
// // //         return 'even'
// // //      } else {
// // //         return 'odd'
// // //      }
// // // });

// // // const newArray3 =  array.map((elem)=> elem%2 ==0)
// // // console.log(newArray , newArray2 , newArray3)





// // // const students  = [{ name: 'Chapri' ,hindi: 40 , english: 60,math: 50, chemistry:90}, { name: 'Chaprayin' ,hindi: 50 , english: 50,math: 30, chemistry:60},{ name: 'Legend' ,hindi:33 , english: 33,math: 33, chemistry:33} , { name: 'Ultra Legend' ,hindi: 0 , english: 0,math: 0, chemistry:0} , { name: 'Thanos' ,hindi: 100 , english: 100,math: 100, chemistry:100}]

// // // const studentsResult  =  students.map((elem , index, array)=>{
// // //         let value  = 'Pass'
// // //        for(let key in elem) {
// // //         if(!isNaN(elem[key])) {
// // //              if(elem[key]< 33) {
// // //                 value = 'Failed'
// // //                     break;
// // //              }
// // //         } 
// // //         // if(isNaN(elem[key])) { 
// // //         //     // string
// // //         //  continue;
// // //         // }  else {
// // //         //     //number
// // //         //     if(elem[key]< 33) {
// // //         //         value = 'Failed'
// // //         //             break;
// // //         //      }
// // //         // }
// // //        }
// // //        elem.result  = value
// // //        return elem
// // // });

// // // console.log(studentsResult)
// // // // studentsResult =  [{ name: 'Chapri' ,hindi: 40 , english: 60,math: 50, chemistry:90, result: 'PASS'}, { name: 'Chaprayin' ,hindi: 50 , english: 50,math: 30, result: 'Failed', chemistry:60},{ name: 'Legend' ,hindi:33 , english: 33,math: 33, chemistry:33, result: 'Pass'}  , { name: 'Ultra Legend' ,hindi: 0 , english: 0,math: 0, chemistry:0 , result: 'Failed'} , { name: 'Thanos' ,hindi: 100 , english: 100,math: 100, chemistry:100 ,result: 'Pass'}]





// // // // ################################ filter ######################

// // // // It is higher order method 
// // // // it can be apply on  array
// // // // it is declrative
// // // // it  will accept call back functions
// // // // this is use for filteration of array
// // // // this will return the filter array 
// // // // it does not modify orginal array .



// // // const numbers = [1,2,3,4,100, 200, 56, 77, 33 , 53];

// // // // give me the odd number in given array

// // // const result  =  numbers.filter((elem , index, array)=>{
// // //         return elem%2!=0;
// // // })

// // // const result2  =  numbers.filter((elem , index, array)=>{
// // //     return true
// // // })

// // // console.log(result , 'result')

// // // // find the students who are failed
// // //  const listOfStudents  = [{ name: 'Chapri' ,hindi: 40 , english: 60,math: 50, chemistry:90}, { name: 'Chaprayin' ,hindi: 50 , english: 50,math: 30, chemistry:60},{ name: 'Legend' ,hindi:33 , english: 33,math: 33, chemistry:33} , { name: 'Ultra Legend' ,hindi: 0 , english: 0,math: 0, chemistry:0} , { name: 'Thanos' ,hindi: 100 , english: 100,math: 100, chemistry:100}]




// // //  const listOfStudentsResult = listOfStudents.filter((obj , index , array)=>{
// // //    let value = 'Pass'
// // //     for(let key in obj) {
// // //         if(!isNaN(obj[key])) {
// // //              if(obj[key]< 33) {
// // //                 value = 'Failed'
// // //                     break;
// // //              }
// // //         } 
   
// // //        }
// // //        return value === 'Failed'
// // //  })

// // //  console.log(listOfStudentsResult)


// // //   // chaining filter map 


// // //   const dataResult = listOfStudents.map((obj , index , array)=>{
// // //     let value = 'Pass'
// // //      for(let key in obj) {
// // //          if(!isNaN(obj[key])) {
// // //               if(obj[key]< 33) {
// // //                  value = 'Failed'
// // //                      break;
// // //               }
// // //          } 
// // //         }
// // //         obj.result  = value
// // //         return obj
// // //   }).filter((elem , index, array)=>{
// // //     return elem.result === 'Failed'
// // //   })

// // //   console.log(dataResult)


// // //   const marks = [33 , 88 , 90 , 50 , 70 , 23 , 43 , 12]

// //   // function getGrade(elem) {
// //   //   if(elem<33) {
// //   //     return 'D'
// //   //   } else if(elem>=33 && elem< 50) {
// // //       return 'C'
// // //     } else if(elem>=50 && elem< 80) {
// // //       return 'B'
// // //     } else {
// // //       return 'A'
// // //     }
// // //   }

// // //   const marksResult =  marks.map((elem , index ,  array)=>{
// // //       return {
// // //         value : elem ,
// // //         passingMarks: elem> 33 ?  'Yes' : 'No',
// // //         grade: getGrade(elem)
// // //       }
// // //   }).filter((obj)=>{
// // //     return   obj.value >=33
// // //     // return passingMarks === 'yes'
// // //   })

  

// // //   // const resula = marksResult.filter((obj)=>{
// // //   //   return   obj.value >=33
// // //   //   // return passingMarks === 'yes'
// // //   // })

  
// // //   console.log(marksResult)

// // // // [{
// // // //     value: 88 ,
// // // //     passingMarks : 'Yes',
// // // //     grade:'A'
// // // // } ,
// // // // {
// // // //     value: 33 ,
// // // //     passingMarks : 'Yes',
// // // //     grade:'C'
// // // // },
// // // // {
// // // //     value: 90 ,
// // // //     passingMarks : 'Yes',
// // // //     grade:'A'
// // // // } ,{
// // // //     value: 70 ,
// // // //     passingMarks : 'Yes',
// // // //     grade:'B'
// // // // }
// // // // ]
// // // //   all passing number 

// // // // {
// // // //     value: 50 ,
// // // //     passingMarks : 'Yes',
// // // //     grade:'B'
// // // // }

// // // // 33 > passing 
// // // // 33< Failed

// // // // >33 => D
// // // // 33-49 => c
// // // // 50 -79 =>b
// // // // 80-100 =>a




// // // // ############################### find #######################

// // // // it is highe order method 
// // // // it will take callback function as parameter
// // // // it is decklrative
// // // // it will use for finding the single element which match condition
// // // // it will return the elem
// // // // this will return the value of first element which match the condition
// // // // this will execute in all elem
// // // // if there is not matching it will return undefined
// // // // it will not change original array

// // // var array   = [34 ,89 , 100 , 37];

// // // var elem =  array.find((elem , index , array)=>{
// // //     return elem == 100
// // // })
// // // console.log(elem) // 100



// // // var array   = [34 ,89 , 100 , 37];

// // // var elem =  array.find((elem , index , array)=>{
// // //     return index ===3
// // // })
// // // console.log(elem) //  34




// // // //  ######################## some  ##########################

// // // // this method return true or false 
// // // // this will not modify original array 
// // // // this is again hof  functions 
// // // // it is declrative 
// // // // this will check if any array elements pass the condtion  if any of the element  pass the condition it will return true else false
// // // // it will return false if all the array element does not pass the contions


// // //  var results = [33 , 45 , 67 , 78 , 23] ;


// // //  const isAnyStudentsFailed = results.some((elem , index, array)=>{
// // //     return elem<33
// // //  })
// // //  const isAnyStudentsFailed1 = results.some((elem , index, array)=>{
// // //   return elem<22
// // // })

// // // const isAnyStudentsFailed3 = results.some((elem , index, array)=>{
// // //   return elem<22
// // // })

// // // console.log(isAnyStudentsFailed1) // false

// // //  console.log(isAnyStudentsFailed) // true


// //  //  ######################## Every  ##########################


// // // // this method return true or false 
// // // // this will not modify original array 
// // // // this is again hof  functions 
// // // // it is declrative 
// // // // this will check if all array elements pass the condtion  if all elemnts  pass the condition it will return true else false
// // // any of the element does not pass the condition it will return false
// // // // it will return false if all the array element does not pass the contions

// //  var results = [33 , 45 , 67 , 78 , 48] ;


// //  const isaAllStundentPass = results.every((elem , index, array)=>{
// //     return elem>=33
// //  })

// //  const isAllStudentBgrade = results.every((elem , index, array)=>{
// //   return elem>70
// // })

// // const isaAllStundentPass2 = results.every((elem , index, array)=>{
// //   return elem<22
// // })

// //  console.log(isaAllStundentPass) // true

// //  console.log(isAllStudentBgrade) // true

// //  console.log(isaAllStundentPass2) // true


//  const numbers = [1, 2, 3, 4, 5];

// // const a  = d => d;

// // const a = (d) => {
// //   return d
// // }

// // const result = numbers.filter(n => n % 2)
// // here we are returning the remainder after dividing the value with 2 if any number which is odd  
// // and we will divide by 2  this will always give value 1 and in javascript except the 0 number all another number
// // are truthy  so here for odd number callback function inside filter will give truthy so filter will return all 
// // odd number


//  // result = [1,3,5]




// //  // ######################################### reduce ###############################

 //this function is apply in array , and as name suggest this function iterate through all the array and 
 // reduce array into single value and return that value

 // this is higher order function
 // this will take once callback which we are calling action
 // it is declarative 
 // it does not modify original array 
 //


//  var num1 = [1,3,4,5,6,7,8];

//  // want to find the sum of given array  

//  var sum = 0;
//  for(let elem of num1) {
//   sum+=elem
//  }

//  var sum1 = 0;
//  num1.forEach((elem , index)=>{
//   sum1+=elem
//  })




//  const reduceCallback = (previousValue , currentValue , currentIndex , originalArray) => {
//      return previousValue + currentValue
//  }
 
// const reduceRes = num1.reduce(reduceCallback , 0)
// console.log('reduceRes' , reduceRes)


// this is the reduce code
// Array.prototype.reduce = function (func , initialValue) {
//  let array  = this;
//  array.forEach((elem , index , array)=>{
//   initialValue  = inti func(initialValue , elem , inde , array)
//  })
//  return  initialValue
// }


// const add = (a,b) => {
//   return a+b;
// }

// function reduce (func ) {
// func(1,2)
// }


// reduce(add)




// for in 
// for of 
// forEACH 
// MAP
// FILTER 
// SOME
// EVERY 
// SHIFT 
// UNSHIFT 
// SLICE
// SPLICE
// INDEXOF
// FIRSTIndexof
// lastIndexOF
// includes
// join
// split 
// push  
// pop
// find 
// reduce






// var num3 = [2,3,4,5,6];

// // find the multiplication of array

// var multi = num3.reduce((acc , currentItem)=>{
//      return acc * currentItem
// } , 1)

// console.log(multi);


 // {count:5}

  var count = num3.reduce((acc , currentItem)=>{
    if(acc.count) {
      acc.count =  acc.count + 1
    } else {
      acc.count = 1;
    }
    // acc.count =  (acc.count || 0) + 1
    return acc;
  } , {})

// // console.log(count) // {count: 5}



// Array.prototype.reduce = function (func , initialValue) {
//  let array  = this;
//  array.forEach((elem , index , array)=>{
 
// const callback = (element  , index)=>{
//   console.log('=>' , element ,  'index=>' , index)
// }

// function highPerformers (student) {
//     const resultStudents = student.map(
//       function (elem , index, array) {
//           console.log(elem) // {name: 'Mohan', scores: [80, 95, 60] , average:}
//           const sum = elem.scores.reduce((acc , elem)=>{
//             return acc+elem
//           } , 0)

//           elem.average = sum / elem.scores.length
//           return elem;
//       }
//     ).filter((elem , index)=>{
//       return elem.average > 90
//     })
//    console.log(resultStudents)

// }


// const students = [
//   {"name":"Ram","scores":[80,95,60]}, //  => 0
//   {"name":"Mohan","scores":[85,70,90]}, //  => 1
//   {"name":"Sai","scores":[60,70,80]},  // =>2 
//   {"name":"Hemang","scores":[95,90,94]}  // => 3

//   ]


// highPerformers(students)


// Find the sum of  all positive  numbers in given array
// you have to use filter and reduced\

// const  a = [1, 2, -3, -4, 5, -8, 8] //  ans => 16


// Given a word of string , seperated with single space , you need to find return the first character of each words in single string
// split , map       , join  ,  , toUpperCase
// const s =  'Hey I am Cool Dont worry';

// function firstCharacter(str) {
// return  str.split(' ').map((elem)=>{
//   return elem[0];
// }).join('').toUpperCase()
// }

// console.log(firstCharacter(s)) // HIACDW



//Count the occurrences of distinct elements in the given 2D array. 
//The given input is an array, the elements of which are arrays of strings. 
//The result is an object whose property names are the values from the arrays 
//and their value is the number of their occurrences.

// reduce  


  
// {
//   a: 1,
//   b: 1,
//   c: 2,
//   d: 2,
//   f: 2,
//   g: 1,
// }


const numbers = [1,2,3,4,5] //  {count}

var count = num3.reduce((acc , currentItem)=>{
  if(acc.count) {
    acc.count =  acc.count + 1
  } else {
    acc.count = 1;
  }
  // acc.count =  (acc.count || 0) + 1
  return acc;
} , {}) 

Array.prototype.reduce = function (callback , initialValue) {
  // this  => array
  const array  = this;
  array.forEach((elem , index,array)=>{
    if(initialValue !=undefined) {
      initialValue =  callback(initialValue , elem , index , array)
    } else {
      initialValue = callback(elem , elem , index , array)
    }
  })
  return initialValue;
}

// reduce  
function getOccurrence(array) {
  const result  = array.reduce( function (initialValue , currentValue ){
        if(initialValue[currentValue] ) {
          initialValue[currentValue] += 1;
        } else {
          initialValue[currentValue] =1
        }
        return initialValue;
  },  {})
  console.log(result)
  }
  
  const input = ['a', 'b', 'c', 'c', 'd', 'f', 'd', 'f', 'g'];

  getOccurrence(input)



  // You are given an array of objects representing a collection of employees, 
  // each with a name, salary, and department. 
  // Your task is to use map, filter, and reduce 
  // to calculate the average salary for each department
  //  and then return an array of objects 
  //  containing only the departments that have an average salary above 65000.

  const employees = [
    { name: "John", salary: 50000, department: "IT" },
    { name: "Jane", salary: 60000, department: "HR" },
    { name: "Bob", salary: 55000, department: "IT" },
    { name: "Sophie", salary: 75000, department: "HR" },
    { name: "Mike", salary: 65000, department: "IT" },
    { name: "Emily", salary: 80000, department: "HR" },
    { name: "David", salary: 70000, department: "IT" },
  ];

  // for  in 
  // reduce 
  // push 
  // map 
  // filter
  
  //result 
//    [
//   { department: 'HR', average: 71666 }
// ]