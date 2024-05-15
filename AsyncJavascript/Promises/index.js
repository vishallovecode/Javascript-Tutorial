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


const pp1 = new Promise((resolve , reject)=>{

})
console.log(pp1)


const pp2 = new Promise((resolve , reject)=>{
  resolve('I called first')
  reject('I will call later')
})
console.log(pp2)




const promise1 = new Promise((resolved , rejected)=>{
    setTimeout(()=>{
      resolved([1,2,2,6,3,4,54,5])
    } ,5000)
})



// promise chaining 
// then  
// catch
// finally
promise1.then((res)=>{
  // if promise is resolved
  console.log('success' , res)
}).catch((err)=>{
  //if promise is rejected
  console.log('error' , res)
})



const promise2 = new Promise((resolved , rejected)=>{
  setTimeout(()=>{
    rejected("Error Occurred while calling the api.....")
  } ,6000)
})

function success (res) {
  console.log(res)
}

function error (error) {
  console.log(error)
}
promise2.then(success).catch(error)