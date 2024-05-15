// Array 
// String 
// Number
// Function 
// Object 
// Array 

// array  => Array()

// const promise = new Promise((resolved , rejected)=>{
//   resolved(2)
// }); 

// console.log(promise)
//  {

// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: 2
//  }


function callback (resolved , rejected) {
  // first parameter is function which will use for resolving the promise
  // second parameter is function which will use for rejecting the promise
    resolved(234) // whatever we passed argument to these two function this willbecome the result of the promise object

}
const pr =  new Promise(callback);

console.log(pr)

const pr1 = new Promise((resolve , reject)=>{
    reject('dont worry you will get better')
})
console.log(pr1)