

// // 

// // const data = {
// //   name: 'Hello',
// //   printName: function () {
// //     console.log(this.name)
// //   }
// // }


// // const bindFunc = data.printName.bind({name: 'Raj'})
// // bindFunc() // Raj
 

// // Polyfill for bind
// Function.prototype.mybind = function(obj , ...args) {
//     const func =  this;
//     return function (...arg2) {
//       func.apply(obj , [...args , ...arg2])
//     }
// }

// function getExample(...args) {
//     console.log(this.name , args)
// }

// const func = getExample.mybind({name: 'Hurrah'} , 1,2,3,4,5)
// func(6,7,8,9)



// // folyfill for call ?? 

// Function.prototype.mycall = function(context , ...args) {
//   context.func =  this; // args coming as rest opeartor and it is in array
//   context.func(...args) //method invocation
// }

// // rest operator 
// // spread operator 
// // map filter , reduce
// // race , all , allsettled , any
// // promise 

// function getRaja() {
//   console.log(this.myname)
// }

// getRaja.mycall({myname: 'Raja hu me'})


// const context = {
//   myname: 'Raja hu me',
//   func: function () {
//     console.log(this.myname) //  this?? => context
//   }
// }

// context.func()


// Function.prototype.myapply = function(context , args) {
//   // args is already in array 
//   context.func =  this;
//   context.func(...args) // here we are spreading array
// }



// // Polyfill of map 

// Array.prototype.mymap = function (callback) {
// //  ?? 
// // this =>  array ??
// const array = this ;
// const result  = [];
// for(let i=0;i<array.length;i++) {
//   // result.push(callback(array[i] , index , array))
//   result[i] = callback(array[i] , i , array)
// }
// return result;
// }


// const array  = [1,2,3,4,5,6];

// // const data = array.map((elem , index, array)=>{
// //   return elem*2
// //   });

//   //data= [2,4,6,8,10,12]

// const data = array.mymap((elem , index, array)=>{
// return elem*2
// });

//  console.log(data , 'data')



// Filter Polyfill

// Honesty Do this ?? 

Array.prototype.myfilter = function (callback) {
  const array = this ;
  const result = [];
  for(let i=0;i<array.length;i++) {
    if(callback(array[i] , i, array)) {
      result.push(array[i])
    }
  }
  return result;
  }
  

 

  // Reduce 
  // Promise.all
  // Promisea.allSettled
  // Promise.race
  // Promise.any

  
Array.prototype.myreduce = function (callback , initialValue) {
const array  =  this;
let acc = initialValue !== undefined ?  initialValue : array[0]
let index =  initialValue !== undefined ?  0 : 1
for(let i=index;i<array.length;i++){
  acc = callback(acc , array[i], i , array)
}
return  acc;
}  
//
const sum =[1,2,3,4,5].myreduce((acc , item, index , array)=>{
  return acc+ item;

}  , 0)

console.log('sum=>' , sum)



// Write a polyfill for Promise.all

Promise.myall = function (promises) {
  const result  = new Array(promises.length);
  let promiseCount =0;
  return new Promise((resolved , rejected)=>{
  promises.forEach((promise , index) => {
    promise.then((data)=>{
        result[index] = data;
        promiseCount++;
        if(promiseCount === promises.length) {
          resolved(result)
        }
    }).catch((err)=>{
      rejected(err)
    })
  });
})
}

const prany1 =  new Promise((resolved , rejected)=>{
  setTimeout(()=>{
    resolved('Hey I am Resolved after 5 second ')
  }, 5000) // 5 SEC
})

const prany2 =  new Promise((resolved , rejected)=>{
  setTimeout(()=>{
    resolved('Hey I am Rejected after 4 second ')
  }, 4000) // 4 SEC
})
const prany3 =  new Promise((resolved , rejected)=>{
  setTimeout(()=>{
    resolved('Hey I am resolved after 2 second ')
  }, 2000) // 2 SEC
})

const prany4 =  new Promise((resolved , rejected)=>{
  setTimeout(()=>{
    resolved('Hey I am resolved after 1 second ')
  }, 1000) // 1 SEC
})


const prany5 =  new Promise((resolved , rejected)=>{
  setTimeout(()=>{
    rejected('Hey I am resolved after 100 milliseocnd ')
  }, 100) // 1 SEC
})
Promise.myall([prany1 ,prany2 ,prany3,prany4 ,prany5]).then((res)=>{
  console.log(res);
}).catch((error)=>{
  console.log(error)
})


