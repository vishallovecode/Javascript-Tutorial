

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
  const result  = [];
return new Promise((resolved , rejected)=>{
  for(let i=0;i<promises;i++) {
    promises[i].then((data)=>{
        result[i] =  data;
        if(result.length === promises.length) {
          resolved(result)
        }
    }).catch((err)=>{
      rejected(err)
    })
  
  }
})
}

Promise.myall()