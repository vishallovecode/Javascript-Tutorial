// //  // Currying => This can be acievable using closure

// //  function sum(a,b,c) {
// //   return a+b+c
// //  }
// //  sum(1,2,3) //  6
// //  function currySum(a) {
// //    // write your code here
// //    return function(b) {
// //       return function(c) {
// //         return a+b+c
// //       }
// //    }
// //  }
// //  const func  = currySum(100) // (90)(30);
// // const func2 =  func(90)
// // const result  = func2(30)
// //  console.log('result' , result)





// //  // Example-> 2 Given a nested array you need to flatten that array

// //  const array12  = [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[50]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
// //  // First Approach
// //  const array  = [1,2,[[[[[4,[[[[[0,[[[[[[[[10,[[[[2]]]]]]]]]]]]]]]]]]]]]]];

// //  // expected result   => [1,2,4,0,10,2];

// //  const exa = array.toString(); // "'1' ,'2','4','0','10','2'"

// //  const arrayex =  exa.split(','); // ['1','2','4','0', '10','2'] // +'1' =>  1

// //  const arrayResult = arrayex.map((ele)=>{
// //   if(isNaN(ele)) {
// //     return +ele;
// //   } 
// //   return ele;
// //  })


// //  // Second Approach
// // // flat(n)// level of nested array  , how much depth you want to  flat array , Infinity means go till all nested level;

// // console.log(array.flat(Infinity)) // [1,2,4,0,10,2]

// // console.log(array12.flat(Infinity)) // [50]



// // // Write you own function which will accept aray(which is nested ) and return the flat array

// //  // 
// // function flatten(arr , res) {
// //   // write your code here
// //   const result  = []  // 
// // //   if(!Array.isArray(res)) {
// // //     res= [];
// // //   }
// // //   if(!Array.isArray(arr)) {
// // //     throw new Error (`${arr}, is not an array`)
// // //   }
// // //   for(let value of arr) {
// // //     if(Array.isArray(value)){
// // //       // repeat
// // //       const updatedArray =  flatten(value);
// // //       return result.concat(updatedArray)
// // //       // return result.concat(flatten(value));
// // //       // flatten(value , res)
// // //     } else {
// // //         result.push(value)
// // //         // res.push(value)
// // //         console.log('tm yeha aa rahe ho??', value ,result)
// // //     }
// // //   }
// // //   return result;
// // //   // return res
// // // }
// // // const customFlat = flatten(array);
// // // console.log('customFlat' , customFlat)



// // const obj = {
// //   a:{
// //     b:{
// //       c:{
// //         d:{
// //           e:123
// //         }
// //       }
// //     },
// //     g: {r: 10}
// //   },
// //   rr: 20
// // }
// // function isObject(obj) {
// //   return obj && !Array.isArray(obj) && typeof obj =='object'
// // }
// // function flatObject(obj) {
// //   let result  = {};
// //     if(isObject(obj)){
// //         for(let key in obj) {
// //           console.log(key)
// //           if(isObject(obj[key])) {
// //               const updatedRes =   flatObject(obj[key])
// //              result =  {...result , ...updatedRes};
// //           } else {
// //             result[key] = obj[key]
// //             console.log('result' , result)
// //           }
// //         }
// //     }  else {
// //       throw new Error (`${obj}, is not an object`)
// //     }
// //     return result
// // }

// // const resultObj  = flatObject(obj); // {e:123 ,r:10}

// // console.log('resultObj' , resultObj)



// // const resultObj1  = flatObject(obj); // {'a.b.c.d.e':123 ,a.g.r:10 , rr: 20}

// // console.log('resultObj' , resultObj1)



// // // Friday 

// // // advanced curry
// // // getElementsByClassName
// // // compareTwo Object
// // // clone object


// // // this  ?? context maintain  / this  => normal function , arrow function todo= > react

// // // __proto__  equivalte to the getPrototypeOf 
// // // its give you the protottype of any object
// // //if create any function starting with new keyword that function have constructor or every function have constructor
// // //



// // // A special function that creates or intialize the new instance of particular class or Cinstructor function


// // const data  = new Array([1,2,3,4])
// // data.constructor //  => Array

 

// function isObject(obj) {
//   return obj && !Array.isArray(obj) && typeof obj =='object'
// }

// function flatObject(obj , result , prevKey ) {
//   if(!result ) {
//     result = {}
//   }
//   if(!prevKey) {
//     prevKey = ''
//   }
//     if(isObject(obj)){
//         for(let key in obj) {
//           if(isObject(obj[key])) {
//             prevKey = prevKey +  key + '.';
//            flatObject(obj[key] , result , prevKey)
//           } else {
//             result[prevKey] = obj[key]
//             prevKey = ''
//             console.log('result' , result)
//           }
//         }
//     }  else {
//       throw new Error (`${obj}, is not an object`)
//     }
//     return result
// }



// const employe = {
//     a: {
//       b: {
//         c:{
//           d: 123
//         }
//       },
//       a1:{
//         a2: {
//           a3:123
//         }
//       }
//     }
// }
// console.log('hey' ,flatObject(employe))





// deepEqual 

// both object can be nested 
const aa=  {
  a: {
    b:{
      c:{
        d:{
          b:1234 // n  [a,b,c,d,b]
        }
      }
    }
  }
}
const bb=  {
  a: {
    b:{
      c:{
        d:{
          e:1234   //  [a,b,c,d,e]
        }
      }
    }
  }
}

function deepEqual (obj1 , obj2 ) {
  // getting the keys of obj1 

  // getting the keys of obj2
  const keys1 = Object.keys(obj1) // array of keys
  const keys2 = Object.keys(obj2) // array of keys
  if(typeof obj1!== typeof obj2) {
    return false
  }
  if(keys1.length != keys2.length) {
    return false
  };
if(typeof obj2 === 'object' && obj1!==null && obj2!==null && !Array.isArray(obj1) && !Array.isArray(obj2)) {

  for(let key of keys1) {
    // the object are nested ??  How you will solved
    if(!keys2.includes(key)) {
      return false
    } else {
      if(!deepEqual(obj1[key] ,  obj2[key])) {
        return false
      }
    }
  }
}
  return true
} 

console.log('Hey',deepEqual(aa ,bb)) // 10%


// Recursion practise => I will teach recursion





// Promises => Practise

//  Interview Questions

// 


const executeTaskPool = function (tasks , pool) {
 // write your code here
}


//create 5 promise and run this functions  
// pool =3


// funs => array of function which is returning promise /  [fun1 , func2 , func]
// function executePoolTask(arrayOfFunction , pool) {
//   return new Promise((resolved, rejected)=>{
//     let progressCount  = 0; //  this will maintain how many promise ar running
//     let index = 0; // closures
//     function callPromise() {
//        // it will defined you that at a time how many promise we want to call
//        if(index>=arrayOfFunction.length) {
//         if(progressCount ===0) {
//           resolved();
//         }
//         return;
//        }
//         while(progressCount < pool && index< arrayOfFunction.length) {
//           progressCount++;
      
//           arrayOfFunction[index].then((data)=>{
//             // the code will come here if task is resolved 
//             // resolved
//             console.log(data)
//             progressCount =  progressCount -1;
//             callPromise()
//           })
//           index++ ;
//         }
//     }
//     callPromise()
//   })
// }

const pr1 = new Promise((resolved , rejected)=>{
  setTimeout(()=>{
    resolved('Promise1')
  } , 2000)  // 2 sec
})

const pr2 = new Promise((resolved , rejected)=>{
  setTimeout(()=>{
    console.log('Hey i am called alearyed')
    resolved('Promise2')
  } , 20000) // 3 sec
})


const pr3 = new Promise((resolved , rejected)=>{
  setTimeout(()=>{
    resolved('Promise3')
  } , 5000) // 2 sec
})


const pr4 = new Promise((resolved , rejected)=>{
  setTimeout(()=>{
    resolved('Promise4')
  } ,6000) // 5 sec
})

const pr5 = new Promise((resolved , rejected)=>{
  setTimeout(()=>{
    resolved('Promise5')
  } , 7000) // 4 sec
})



// executePoolTask([pr1 , pr2 , pr3 , pr4 , pr5] , 1 ).then(()=>{
//   console.log('Hye')
// })


 

// function createPromisePool(tasks, concurrency) {
//   let runningCount = 0;
//   let index = 0;

//   function runNextTask() {
//     if (runningCount >= concurrency || index >= tasks.length) {
//       return;
//     }

//     const task = tasks[index];
//     const promise = task();

//     runningCount++;

//     promise
//       .then((data) => {
//         console.log(data)
//         runningCount--;
//         runNextTask(); // Run the next task once the current one completes
//       })
//       .catch((error) => {
//         runningCount--;
//         console.error(error); // Handle any errors that occur during task execution
//         runNextTask(); // Run the next task even if an error occurred
//       });

//     index++;
//     runNextTask(); // Run the next task immediately
//   }

//   return runNextTask();
// }

function throttlePromises(funcs, max) {
  if(funcs.length == 0) return Promise.resolve([]);

  let lastIndex = 0;
  let pendingCount = 0;
  const result = new Array(funcs.length).fill(undefined);
  return new Promise((resolve, reject) => {

    function runBatch() {
      while(lastIndex < result.length && pendingCount < max) {
        const storeData = (index) => (data) => {
          console.log(data)
          result[index] = data;
        };
        const scheduleOrFinish = () => {
          pendingCount--;
          
          if(lastIndex < result.length) return runBatch();

          if(pendingCount === 0) return resolve(result);
        }
        const fn = funcs[lastIndex];
        fn().then(storeData(lastIndex)).catch(reject).finally(scheduleOrFinish);
        lastIndex++
        pendingCount++;
      }
    }
    
    runBatch();
  })
}

throttlePromises([()=>pr1 , ()=>pr2 , ()=>pr3 , ()=>pr4 , ()=>pr5] ,1)
 
// 100ms 200ms 300ms 400ms 500ms 600ms


// pool =2
// [func1 , func2 , func3 , fun4 , func5 , func6]


 