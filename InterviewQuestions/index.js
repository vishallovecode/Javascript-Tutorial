// // //  // Currying => This can be acievable using closure

// // //  function sum(a,b,c) {
// // //   return a+b+c
// // //  }
// // //  sum(1,2,3) //  6
// // //  function currySum(a) {
// // //    // write your code here
// // //    return function(b) {
// // //       return function(c) {
// // //         return a+b+c
// // //       }
// // //    }
// // //  }
// // //  const func  = currySum(100) // (90)(30);
// // // const func2 =  func(90)
// // // const result  = func2(30)
// // //  console.log('result' , result)





// // //  // Example-> 2 Given a nested array you need to flatten that array

// // //  const array12  = [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[50]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
// // //  // First Approach
// // //  const array  = [1,2,[[[[[4,[[[[[0,[[[[[[[[10,[[[[2]]]]]]]]]]]]]]]]]]]]]]];

// // //  // expected result   => [1,2,4,0,10,2];

// // //  const exa = array.toString(); // "'1' ,'2','4','0','10','2'"

// // //  const arrayex =  exa.split(','); // ['1','2','4','0', '10','2'] // +'1' =>  1

// // //  const arrayResult = arrayex.map((ele)=>{
// // //   if(isNaN(ele)) {
// // //     return +ele;
// // //   } 
// // //   return ele;
// // //  })


// // //  // Second Approach
// // // // flat(n)// level of nested array  , how much depth you want to  flat array , Infinity means go till all nested level;

// // // console.log(array.flat(Infinity)) // [1,2,4,0,10,2]

// // // console.log(array12.flat(Infinity)) // [50]



// // // // Write you own function which will accept aray(which is nested ) and return the flat array

// // //  // 
// // // function flatten(arr , res) {
// // //   // write your code here
// // //   const result  = []  // 
// // // //   if(!Array.isArray(res)) {
// // // //     res= [];
// // // //   }
// // // //   if(!Array.isArray(arr)) {
// // // //     throw new Error (`${arr}, is not an array`)
// // // //   }
// // // //   for(let value of arr) {
// // // //     if(Array.isArray(value)){
// // // //       // repeat
// // // //       const updatedArray =  flatten(value);
// // // //       return result.concat(updatedArray)
// // // //       // return result.concat(flatten(value));
// // // //       // flatten(value , res)
// // // //     } else {
// // // //         result.push(value)
// // // //         // res.push(value)
// // // //         console.log('tm yeha aa rahe ho??', value ,result)
// // // //     }
// // // //   }
// // // //   return result;
// // // //   // return res
// // // // }
// // // // const customFlat = flatten(array);
// // // // console.log('customFlat' , customFlat)



// // // const obj = {
// // //   a:{
// // //     b:{
// // //       c:{
// // //         d:{
// // //           e:123
// // //         }
// // //       }
// // //     },
// // //     g: {r: 10}
// // //   },
// // //   rr: 20
// // // }
// // // function isObject(obj) {
// // //   return obj && !Array.isArray(obj) && typeof obj =='object'
// // // }
// // // function flatObject(obj) {
// // //   let result  = {};
// // //     if(isObject(obj)){
// // //         for(let key in obj) {
// // //           console.log(key)
// // //           if(isObject(obj[key])) {
// // //               const updatedRes =   flatObject(obj[key])
// // //              result =  {...result , ...updatedRes};
// // //           } else {
// // //             result[key] = obj[key]
// // //             console.log('result' , result)
// // //           }
// // //         }
// // //     }  else {
// // //       throw new Error (`${obj}, is not an object`)
// // //     }
// // //     return result
// // // }

// // // const resultObj  = flatObject(obj); // {e:123 ,r:10}

// // // console.log('resultObj' , resultObj)



// // // const resultObj1  = flatObject(obj); // {'a.b.c.d.e':123 ,a.g.r:10 , rr: 20}

// // // console.log('resultObj' , resultObj1)



// // // // Friday 

// // // // advanced curry
// // // // getElementsByClassName
// // // // compareTwo Object
// // // // clone object


// // // // this  ?? context maintain  / this  => normal function , arrow function todo= > react

// // // // __proto__  equivalte to the getPrototypeOf 
// // // // its give you the protottype of any object
// // // //if create any function starting with new keyword that function have constructor or every function have constructor
// // // //



// // // // A special function that creates or intialize the new instance of particular class or Cinstructor function


// // // const data  = new Array([1,2,3,4])
// // // data.constructor //  => Array

 

// // function isObject(obj) {
// //   return obj && !Array.isArray(obj) && typeof obj =='object'
// // }

// // function flatObject(obj , result , prevKey ) {
// //   if(!result ) {
// //     result = {}
// //   }
// //   if(!prevKey) {
// //     prevKey = ''
// //   }
// //     if(isObject(obj)){
// //         for(let key in obj) {
// //           if(isObject(obj[key])) {
// //             prevKey = prevKey +  key + '.';
// //            flatObject(obj[key] , result , prevKey)
// //           } else {
// //             result[prevKey] = obj[key]
// //             prevKey = ''
// //             console.log('result' , result)
// //           }
// //         }
// //     }  else {
// //       throw new Error (`${obj}, is not an object`)
// //     }
// //     return result
// // }



// // const employe = {
// //     a: {
// //       b: {
// //         c:{
// //           d: 123
// //         }
// //       },
// //       a1:{
// //         a2: {
// //           a3:123
// //         }
// //       }
// //     }
// // }
// // console.log('hey' ,flatObject(employe))





// // deepEqual 

// // both object can be nested 
// const aa=  {
//   a: {
//     b:{
//       c:{
//         d:{
//           b:1234 // n  [a,b,c,d,b]
//         }
//       }
//     }
//   }
// }
// const bb=  {
//   a: {
//     b:{
//       c:{
//         d:{
//           e:1234   //  [a,b,c,d,e]
//         }
//       }
//     }
//   }
// }

// function deepEqual (obj1 , obj2 ) {
//   // getting the keys of obj1 

//   // getting the keys of obj2
//   const keys1 = Object.keys(obj1) // array of keys
//   const keys2 = Object.keys(obj2) // array of keys
//   if(typeof obj1!== typeof obj2) {
//     return false
//   }
//   if(keys1.length != keys2.length) {
//     return false
//   };
// if(typeof obj2 === 'object' && obj1!==null && obj2!==null && !Array.isArray(obj1) && !Array.isArray(obj2)) {

//   for(let key of keys1) {
//     // the object are nested ??  How you will solved
//     if(!keys2.includes(key)) {
//       return false
//     } else {
//       if(!deepEqual(obj1[key] ,  obj2[key])) {
//         return false
//       }
//     }
//   }
// }
//   return true
// } 

// console.log('Hey',deepEqual(aa ,bb)) // 10%


// // Recursion practise => I will teach recursion





// // Promises => Practise

// //  Interview Questions

// // 


// const executeTaskPool = function (tasks , pool) {
//  // write your code here
// }


// //create 5 promise and run this functions  
// // pool =3


// // funs => array of function which is returning promise /  [fun1 , func2 , func]
// // function executePoolTask(arrayOfFunction , pool) {
// //   return new Promise((resolved, rejected)=>{
// //     let progressCount  = 0; //  this will maintain how many promise ar running
// //     let index = 0; // closures
// //     function callPromise() {
// //        // it will defined you that at a time how many promise we want to call
// //        if(index>=arrayOfFunction.length) {
// //         if(progressCount ===0) {
// //           resolved();
// //         }
// //         return;
// //        }
// //         while(progressCount < pool && index< arrayOfFunction.length) {
// //           progressCount++;
      
// //           arrayOfFunction[index].then((data)=>{
// //             // the code will come here if task is resolved 
// //             // resolved
// //             console.log(data)
// //             progressCount --;
// //             callPromise()
// //           })
// //           index++ ;
// //         }
// //     }
// //     callPromise()
// //   })
// // }

// // const pr1 = new Promise((resolved , rejected)=>{
// //   setTimeout(()=>{
// //     resolved('Promise1')
// //   } , 1000)  // 1 sec
// // })

// // const pr2 = new Promise((resolved , rejected)=>{
// //   setTimeout(()=>{
// //     resolved('Promise2')
// //   } , 1000) // 3 sec
// // })


// // const pr3 = new Promise((resolved , rejected)=>{
// //   setTimeout(()=>{
// //     resolved('Promise3')
// //   } , 1000) // 2 sec
// // })


// // const pr4 = new Promise((resolved , rejected)=>{
// //   setTimeout(()=>{
// //     resolved('Promise4')
// //   } , 1000) // 5 sec
// // })

// // const pr5 = new Promise((resolved , rejected)=>{
// //   setTimeout(()=>{
// //     resolved('Promise5')
// //   } , 1000) // 4 sec
// // })



// // executePoolTask([pr1 , pr2 , pr3 , pr4 , pr5] ,  2)

// // 100ms 200ms 300ms 400ms 500ms 600ms


// // pool =2
// // [func1 , func2 , func3 , fun4 , func5 , func6]






// async 
// sync => async

// function block(duration = 1000) {
//   const start = Date.now()
//   while (Date.now() - start < duration) {
//     window.timestamp = Date.now()
//   }
// }

// function a() {
//    console.log(1)
//    block()
//    setTimeout(() => console.log(2), 0) //   2
//    setTimeout(() => console.log(3), 1) / 3

// }

// function b() {
//   console.log(4)
// }

// console.log(5)
// setTimeout(a, 0)    
// setTimeout(b, 500) // 4


// 5
// 1
// 2 
// 4 
// 3


// // // Function
// // console.log(Function.prototype.__proto__ === Object.prototype) // true
// // console.log(Function.__proto__ === Object.__proto__)
// console.log(Function.__proto__.__proto__ === Object.prototype) // true
// console.log(Object.constructor.prototype === Object.prototype)  // false
// console.log(Function.constructor === Function) //   fase
// console.log(Object.constructor === Object) //  true
// console.log(Array.__proto__ === Function.__proto__) // true
// console.log(Array.constructor === Function) // true
// console.log(Object.__proto__ === Function) // false
// console.log(Function.__proto__ === Function.prototype) // true
// // console.log(Object instanceof Object) // true
// // console.log(Function instanceof Function) // true
// // console.log(Map instanceof Map) // False