// // // Array 
// // // String 
// // // Number
// // // Function 
// // // Object 
// // // Array 

// // // array  => Array()

// // // const promise = new Promise((resolved , rejected)=>{
// // //   resolved(2)
// // // }); 

// // // console.log(promise)
// // //  {

// // // [[PromiseState]]: "fulfilled"
// // // [[PromiseResult]]: 2
// // //  }


// // function callback (resolved , rejected) {
// //   // first parameter is function which will use for resolving the promise
// //   // second parameter is function which will use for rejecting the promise
// //     resolved(234) // whatever we passed argument to these two function this willbecome the result of the promise object

// // }
// // const pr =  new Promise(callback);

// // console.log(pr)

// // const pr1 = new Promise((resolve , reject)=>{
// //     reject('dont worry you will get better')
// // })
// // console.log(pr1)


// // const pp1 = new Promise((resolve , reject)=>{

// // })
// // console.log(pp1)


// // const pp2 = new Promise((resolve , reject)=>{
// //   resolve('I called first')
// //   reject('I will call later')
// // })
// // console.log(pp2)




// // const promise1 = new Promise((resolved , rejected)=>{
// //     setTimeout(()=>{
// //       resolved([1,2,2,6,3,4,54,5])
// //     } ,5000)
// // })



// // // promise chaining 
// // // then  
// // // catch
// // // finally
// // promise1.then((res)=>{
// //   // if promise is resolved
// //   console.log('success' , res)
// // }).catch((err)=>{
// //   //if promise is rejected
// //   console.log('error' , err)
// // })



// // const promise2 = new Promise((resolved , rejected)=>{
// //   setTimeout(()=>{
// //     rejected("Error Occurred while calling the api.....")
// //   } ,6000)
// // })

// // function success (res) {
// //   console.log(res)
// // }

// // function error (error) {
// //   console.log(error)
// // }
// // promise2.then(success).catch(error).finally(()=>{
// //   console.log('Code cleaning perspective')
// // })


// // const neverEndingPromise = new Promise((resolved , rejected)=>{

// // })

// // neverEndingPromise.then(()=>{
// //   console.log('come here with success')
// // }).catch(()=>{
// //   console.log('come here with error')
// // })





// // // .then((success=>{

// // // }) , (error)=>{

// // // })

// // // then can take two callback function first is for success and second can be for error (this can be handle in .catch block)
// // // promise.then(
// // //   function(result) { /* handle a successful result */ },
// // //   function(error) { /* handle an error */ }
// // // );

// function fetchProduct() {
//   // fetch will return the promise
//   fetch('https://dummyjson.com/products').then((response)=>{
//     response.json().then((res)=>{
//       console.log(res)
//     })
//   }).catch((error)=>{
//     console.log('Error')
//   })
// }
// fetchProduct()


// // fetch(){
// //   if(apicallkhatam) {
// //     if(apigives error) {
// //       reject()
// //     } else {
// //       resolved(apiresult)
// //     }
// //   }
// // }



// // Applications Programming Interface   , it is the way for two or more than two com putesr to cummincate with each other


// // this api => https://dummyjson.com/products


// function  getAllProducts() {
//   // fetch accept the multiple parameter 
//   // first will be the api url
//   // and method type = > Get , Post Put , delete , Patch
//   // default method fetch accept is  Get
//   // fetch return the promise
//   fetch('https://dummyjson.com/products').then((res)=>{
//       // fetch will not return the Json data
//       //json method also return the promise
//       res.json().then((jsonData)=>{
//         displayName(jsonData.products)
//       }).catch((err)=>{
//         console.log('error')
//       })
//   }).catch((err)=>{
//       console.log(err)
//   })
// }

// getAllProducts()


// function displayName (productList) {
//     const div = document.createElement('div');
//     div.style.display = 'flex'
//     div.style.gap= '10px'
//     div.style.padding = '20px';
//     div.style.border = '2px solid green'
//     div.style.flexWrap = 'wrap'
//     productList.forEach((elem , index)=>{
//         const div2 =  document.createElement('div');
//         div2.style.display = 'flex'
//         div2.style.gap= '10px';
//         div2.style.padding = '20px';
//         div2.style.background = 'blue'
//         div2.style.color= 'white'
//         div2.style.width = '300px'
//         div2.style.height = '100px'
//         div2.style.fontSize = '25px';
//         div2.style.fontWeight = '600'
      
//         div2.textContent = elem.title;
//         div.appendChild(div2);
//     })  
//     document.body.appendChild(div)
// }




// // const object  = {

// // "id": 1,
// // "firstName": "Terry",
// // "lastName": "Medhurst",
// // "maidenName": "Smitham",
// // "age": 50,
// // "gender": " ",
// // "email": "atuny0@sohu.com",
// // "phone": "+63 791 675 8914",
// // "username": "atuny0",
// // "password": "9uQFF1Lh",
// // "birthDate": "2000-12-25"
// // }




// // id   firstName    lastName    maidenName  age  gender  email            phone            password  userName  birthDate
// //   ``
// // 1     Terry         Medhurst     Smitham    20    male  tuny0@sohu.com  63 791 675 8914  csdcd      assd       2000-12-25
// // 1     Terry         Medhurst     Smitham    20    male  tuny0@sohu.com  63 791 675 8914  csdcd      assd       2000-12-25
// // 1     Terry         Medhurst     Smitham    20    male  tuny0@sohu.com  63 791 675 8914  csdcd      assd       2000-12-25
// // 1     Terry         Medhurst     Smitham    20    male  tuny0@sohu.com  63 791 675 8914  csdcd      assd       2000-12-25
// // 1     Terry         Medhurst     Smitham    20    male  tuny0@sohu.com  63 791 675 8914  csdcd      assd       2000-12-25
// // 1     Terry         Medhurst     Smitham    20    male  tuny0@sohu.com  63 791 675 8914  csdcd      assd       2000-12-25
// // 1     Terry         Medhurst     Smitham    20    male  tuny0@sohu.com  63 791 675 8914  csdcd      assd       2000-12-25



// // How  to create a Promise  ?? 
// // What is Promise ??
// // State of promise
// // // Promise  => api call 99%


// // // fetch()

// // // // dummy code 
// // // function myFetch(){
// // //   return new Promise((resolved , rejected)=>{
// // //     // request the server for connection
// // //     // server give response connection established
// // //     // requst the get  , update , insert  , delete
// // //     // server response with success or error
// // //     let  serverResponseSuccess = true
// // //     let  serverResultSuccess = [{name: 'Vishal'}, {name: 'Vishal'} ,{name: 'Vishal'}]
// // //     if(serverResponseSuccess) {
// // //       resolved(serverResultSuccess)
// // //     }
// // //     let  serverResponse = false
// // //     let  serverError= 'GiveN Path are not valid'
// // //     if(!serverResponse) {
// // //       rejected(serverError)
// // //     }
// // //   })
// // // }



// // // myFetch().then((res)=>{
// // //   // if success pointer come here
// // //   console.log(res)   // [{name: 'Vishal'}, {name: 'Vishal'} ,{name: 'Vishal'}]
// // // }).catch((error)=>{
// // //   // if error code pointer come here
// // //   console.log(error) // 'GiveN Path are not valid'
// // // })



// // // Promise api => There are 6 methods provided by the Promise constructor or class or object


// // // Promise.all() //  VVVVIMP

// // // Promise.race()

// // // Promise.allSetteled()

// // // Promise.any()

// // // Promise.resolve()

// // // Promise.reject()




// // // 1. Promise.resolve
// // // var promiseExample =  new Promise((resolve) => resolve('Hey Cool Bilkul Relax'));


// // // const data  = Promise.resolve('Hey Cool Bilkul Relax')

// // // promiseExample.then((res)=>{
// // //   console.log(res)
// // // })

// // // data.then((res)=>{
// // //   console.log(res)
// // // })


// // // console.log(promiseExample)
// // // console.log(data)



// // // 2. Promise.reject

// // var promiseExample =  new Promise((resolve , rejected) => rejected('Hey Rejection can be very good some times'));

// // var promiseExample1 = Promise.reject('Hey Rejection can be very good some times')


// // console.log(promiseExample1)
// // console.log(promiseExample)


// // promiseExample.then((res)=>{
// //   console.log(res)
// // }).catch((error)=>{
// //   console.log(error)
// // })

// // promiseExample1.then((res)=>{
// //   console.log(res)
// // }).catch((error)=>{
// //   console.log(error)
// // })


// // //  Promise.all
// // function fetcApi1 () {
// // return new Promise((resolved , rejeccted)=>{
// //     setTimeout(()=>{
// //       resolved('Api1')
// //     }, 10000)
// // })
// // }

// // function fetcApi2() {
// //   return new Promise((resolved , rejeccted)=>{
// //     setTimeout(()=>{
// //       resolved('Api2')

// //     }, 2000)
// // })
// // }

// // function fetcApi3 () {
// //   return new Promise((resolved , rejeccted)=>{
// //     setTimeout(()=>{
// //       resolved('Api3')
// //     }, 3000)
// // })
// // }

// // function fetcApi4 () {
// //   return new Promise((resolved , rejeccted)=>{
// //     setTimeout(()=>{
// //       resolved('Api4')

// //     }, 4000)
// // })
// // }

// // function fetcApi5 () {
// //   return new Promise((resolved , rejeccted)=>{
// //     setTimeout(()=>{
// //       // resolved('Api5')
// //       rejeccted('ME REJECT HUA')

// //     }, 5000)
// // })
// // }

// // function fetcApi6 () {
// //   return new Promise((resolved , rejeccted)=>{
// //     setTimeout(()=>{
// //       // resolved('Api6')
// //       rejeccted('errro')

// //     }, 6000)
// // })
// // }

// // const promises =  Promise.all([fetcApi1() , fetcApi2() , fetcApi3() , fetcApi4() , fetcApi5(), fetcApi6()])

// // promises.then((res)=>{
// //   console.log('All Success' ,res)
// // }).catch((err)=>{
// //     console.log('ALL ERROR' ,err)
// // })



// // // we are interested  in other promsie which are resolved , we want to neglect the part of rejection 


// // // Promise.allSettled
// // const promises12 =  Promise.allSettled([fetcApi1() , fetcApi2() , fetcApi3() , fetcApi4() , fetcApi5(), fetcApi6()])

// // promises12.then((res)=>{
// //   console.log('ALLSETLLED success' ,res)
// // }).catch((err)=>{
// // //     console.log('ALLSETLLED error',err)
// // // })




// // // Promie.race => this return once the any of the promise is settled (resolved , rejected)
// // // const prRace1 =  new Promise((resolved , rejected)=>{
// // //   setTimeout(()=>{
// // //     resolved('Hey I am Resolved after 5 second ')
// // //   }, 5000) // 5 SEC
// // // })

// // // const prRace2 =  new Promise((resolved , rejected)=>{
// // //   setTimeout(()=>{
// // //     rejected('Hey I am Rejected after 4 second ')
// // //   }, 4000) // 4 SEC
// // // })
// // // const prRace3 =  new Promise((resolved , rejected)=>{
// // //   setTimeout(()=>{
// // //     resolved('Hey I am resolved after 2 second ')
// // //   }, 2000) // 2 SEC
// // // })

// // // const prRace4 =  new Promise((resolved , rejected)=>{
// // //   setTimeout(()=>{
// // //     rejected('Hey I am resolved after 1 second ')
// // //   }, 1000) // 1 SEC
// // // })


// // // Promise.race([prRace1 , prRace2 , prRace3 , prRace4]).then((res)=>{
// // //   console.log('Race Success::' , res)
// // // }).catch((err)=>{
// // //   console.log('Race Error::' , err)
// // // })



// // // Promise.any  => it is similar to the Promise.race  , it will look for the any first promise to resolved, if any if the promise are not resolved
// // // then  it will gives the error AssertionError


// // const prany1 =  new Promise((resolved , rejected)=>{
// //   setTimeout(()=>{
// //     resolved('Hey I am Resolved after 5 second ')
// //   }, 5000) // 5 SEC
// // })

// // const prany2 =  new Promise((resolved , rejected)=>{
// //   setTimeout(()=>{
// //     rejected('Hey I am Rejected after 4 second ')
// //   }, 4000) // 4 SEC
// // })
// // const prany3 =  new Promise((resolved , rejected)=>{
// //   setTimeout(()=>{
// //     resolved('Hey I am resolved after 2 second ')
// //   }, 2000) // 2 SEC
// // })

// // const prany4 =  new Promise((resolved , rejected)=>{
// //   setTimeout(()=>{
// //     rejected('Hey I am resolved after 1 second ')
// //   }, 1000) // 1 SEC
// // })


// // const prany5 =  new Promise((resolved , rejected)=>{
// //   setTimeout(()=>{
// //     rejected('Hey I am resolved after 100 milliseocnd ')
// //   }, 100) // 1 SEC
// // })

// // Promise.any([prany5 , prany2  , prany4]).then((res)=>{
// //     console.log('Promise any:' , res)
// // }).catch((err)=>{
// //     console.log(err) // AggregateError: All promises were rejected
// // })

// // // settled  => either rejected  or resolved (race first settled promise)


// // Promise.any([prany5 , prany2 , prany3 , prany4 , prany5]).then((res)=>{
// //     console.log('Promise any:' , res)
// // }).catch((err)=>{
// //     console.log(err) //  
// // })




// // Promise.chaining  => I2 ()
// // Polyfill Promise.all , allSetled 
// // Event Loop  (full one lecture)
// // Polyfill 
// // currying


// // async and await 
// // ployfill ()
// // currying

// // Resolving


// async function exampleAsynAwait() {

//       // fetch('https://dummyjson.com/products').then((res)=>{
//       //   res.json().then((data)=>{
//       //     console.log('Data', data)
//       //   })
//       // }).catch((err)=>{
//       //   console.log(err)
//       // })

//       const promise =   new  Promise((resolved , rejected)=>{
//           setTimeout(()=>{
//             resolved('Han I love you to....')
//           }, 5000)
//       })

//       const promise2 =   new  Promise((resolved , rejected)=>{
//         setTimeout(()=>{
//           rejected('Nahi yar mera bf ha....')
//         }, 4000)
//     })

//       // promise.then((res)=>{
//       //     console.log('response' , res)
//       // }).catch((err)=>{
//       //     console.log('Error::' , err)
//       // })
//       try {
//         const dost1 = await promise; //  5 seconds thread => ruk gya
//         console.log(dost1)
//         await promise2; //  4 seconds thread => ruk gya // error
//         console.log('Hey Raja')
//       } catch(error) {
//         console.log('error::', error)
//       }

// }

// // exampleAsynAwait()
// // await  => if you put this keyword before any async task it will wait there only unitl unless that async task not resolved

// async  function getData () {
//   return 'Hello How are You??'
// }

// // function getData () {
// //   return new Promise((resolved , rejected)=>{
// //     resolved('Hello How are You??')
// //   })
// // }

// // getData will return the promise
//   getData().then((res)=>{
//       console.log(res)
//  });

//  // creating arrow function as async 
// const getData1 = async ()=>{

// }

// console.log(getData1())



// const getUsers = async ()=>{
// try {
//   const data = await fetch('https://dummyjson.com/users')
//   const jsonData = await  data.json();
//   console.log(jsonData)
// } catch(error) {
//   console.log(error)
//  }
// }

// getUsers();

// 


// Server  // Method ,headers (arct)

// address of data store (apis) / end point
//  fetch('url').then((result)=>{
//    // result successfullly
//    // fetch does not provide proper json response(object responsee)
//    // we need to convert it inot json
//    result.json().then((data)=>{
//     console.log(data)
//    })
 
//  })



//  fetch(url) {
//   // url  me jake data la rha hoga 
//   // it can take some time
//   new Promise((res , rej)) {
//     // once data is recied
//     res(datasuccess)
//   }
//  }
//  // fetch return the promise 


 // we have power  , using promise that we can provide callback action once async task is done 





 // From here

 const createPromise = () => Promise.resolve(1)



function func1() {
  createPromise().then((a)=> {console.log(a)}) // async
  console.log(2) // 2
}

async function func2() {
 const d = await createPromise();
 console.log(d) // 1
  console.log(3) // 3
}

console.log(4)
func1()
func2()




// const promise = new Promise((resolve, reject) => {

//   const promise2 = Promise.reject('error').then(() => {
//     console.log(1)
//   }, () => {
//     console.log(2) // 2
    
//   })
//   console.log(promise2) // ?? 
//   resolve(promise2)
// });

// promise.then((data)=>{
//   console.log(data) // undefined
// });




// const promise1 = Promise.resolve(1)
// const promise2 = Promise.resolve(2)
// const promise3 = Promise.resolve(3)
// const promise4 = Promise.reject(4)

// const promiseAll = async () => {
//   const group1 = await Promise.all([promise1, promise2])
//   const group2 = await Promise.all([promise3, promise4])
//   return [group1, group2]
// }

// promiseAll().then(console.log).catch(console.log)




// 1ST

console.log("begins");

setTimeout(() => {
  console.log("setTimeout 1");
  Promise.resolve().then(() => {
    console.log("promise 1");
  });
}, 0);

new Promise(function (resolve, reject) {
  console.log("promise 2");
  setTimeout(function () {
    console.log("setTimeout 2");
    resolve("resolve 1");
  }, 0);
}).then((res) => {
  console.log("dot then 1");
  setTimeout(() => {
    console.log(res);
  }, 0);
});




// 2

async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

console.log("script start");

setTimeout(function () {
  console.log("setTimeout");
}, 0);

async1();

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});

console.log("script end");





