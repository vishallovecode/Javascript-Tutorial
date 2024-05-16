// // Array 
// // String 
// // Number
// // Function 
// // Object 
// // Array 

// // array  => Array()

// // const promise = new Promise((resolved , rejected)=>{
// //   resolved(2)
// // }); 

// // console.log(promise)
// //  {

// // [[PromiseState]]: "fulfilled"
// // [[PromiseResult]]: 2
// //  }


// function callback (resolved , rejected) {
//   // first parameter is function which will use for resolving the promise
//   // second parameter is function which will use for rejecting the promise
//     resolved(234) // whatever we passed argument to these two function this willbecome the result of the promise object

// }
// const pr =  new Promise(callback);

// console.log(pr)

// const pr1 = new Promise((resolve , reject)=>{
//     reject('dont worry you will get better')
// })
// console.log(pr1)


// const pp1 = new Promise((resolve , reject)=>{

// })
// console.log(pp1)


// const pp2 = new Promise((resolve , reject)=>{
//   resolve('I called first')
//   reject('I will call later')
// })
// console.log(pp2)




// const promise1 = new Promise((resolved , rejected)=>{
//     setTimeout(()=>{
//       resolved([1,2,2,6,3,4,54,5])
//     } ,5000)
// })



// // promise chaining 
// // then  
// // catch
// // finally
// promise1.then((res)=>{
//   // if promise is resolved
//   console.log('success' , res)
// }).catch((err)=>{
//   //if promise is rejected
//   console.log('error' , err)
// })



// const promise2 = new Promise((resolved , rejected)=>{
//   setTimeout(()=>{
//     rejected("Error Occurred while calling the api.....")
//   } ,6000)
// })

// function success (res) {
//   console.log(res)
// }

// function error (error) {
//   console.log(error)
// }
// promise2.then(success).catch(error).finally(()=>{
//   console.log('Code cleaning perspective')
// })


// const neverEndingPromise = new Promise((resolved , rejected)=>{

// })

// neverEndingPromise.then(()=>{
//   console.log('come here with success')
// }).catch(()=>{
//   console.log('come here with error')
// })





// // .then((success=>{

// // }) , (error)=>{

// // })

// // then can take two callback function first is for success and second can be for error (this can be handle in .catch block)
// // promise.then(
// //   function(result) { /* handle a successful result */ },
// //   function(error) { /* handle an error */ }
// // );

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


// fetch(){
//   if(apicallkhatam) {
//     if(apigives error) {
//       reject()
//     } else {
//       resolved(apiresult)
//     }
//   }
// }



// Applications Programming Interface   , it is the way for two or more than two com putesr to cummincate with each other


// this api => https://dummyjson.com/products


function  getAllProducts() {
  // fetch accept the multiple parameter 
  // first will be the api url
  // and method type = > Get , Post Put , delete , Patch
  // default method fetch accept is  Get
  // fetch return the promise
  fetch('https://dummyjson.com/products').then((res)=>{
      // fetch will not return the Json data
      //json method also return the promise
      res.json().then((jsonData)=>{
        displayName(jsonData.products)
      }).catch((err)=>{
        console.log('error')
      })
  }).catch((err)=>{
      console.log(err)
  })
}

getAllProducts()




function displayName (productList) {
    const div = document.createElement('div');
    div.style.display = 'flex'
    div.style.gap= '10px';
    div.style.padding = '20px';
    div.style.border = '2px solid green'
    div.style.flexWrap = 'wrap'
    productList.forEach((elem , index)=>{
        const div2 =  document.createElement('div');
        div2.style.display = 'flex'
        div2.style.gap= '10px';
        div2.style.padding = '20px';
        div2.style.background = 'blue'
        div2.style.color= 'white'
        div2.style.width = '300px'
        div2.style.height = '100px'
        div2.style.fontSize = '25px';
        div2.style.fontWeight = '600'
      
        div2.textContent = elem.title;
        div.appendChild(div2);
    })  
    document.body.appendChild(div)
}