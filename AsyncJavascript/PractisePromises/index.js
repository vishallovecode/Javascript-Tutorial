// // // async is now and later


// // console.log('hey') // now and now // 1
// // // web apis

// // // function declartion
// // function call (){
// //   console.log('Hey I am cool...') // 3
// // }
// // // action => function

// // setTimeout(call , 1000) // now => later 



// // console.log('hey2') // Hey2 // 2 


// // // function setTimeout(func , delay) {
// // //   const date  = new Date();
// // //   if(date >= delay) {
// // //     func()
// // //   }
// // // }


// // // Api call server  => 1 second  => network  , company server , laptop

// // // function promise (resolved , rejected)=>{

// // // }
// // // const promise =  new Promise(promise)

// console.log('hey3') // 1
// const pr = new Promise((resolved , rejected)=>{
//   console.log('hey') // async or sync // 2
//   // resolved(2)
//   rejected('Something went wrong')
//   console.log('hwuegdye')
// })
// console.log(pr)
// console.log('hey4') // 3


// // const fetchData = ()=>{
// //   const data= fetch();
// // }

// const success = (promiseResult)=>{
//   console.log('Success' , promiseResult)
//   // if promise is resolved process will come here
// }

// pr.then(success).catch((error)=>{
//   // if promise is rejected process will come here
//   console.log('Error' , error)
// })



// const pr2 = new Promise((resolved , rejected)=>{
//   setTimeout(()=>{
//     resolved('AFTER 5 SECOND') // after 5 second
//   } , 5000)
// })

// console.log(pr2) // pending

// pr2.then((res)=>{
//   console.log(res) 
// }).catch((err)=>{
//   console.log(err)
// })


const fetchData = ()=> {
 fetch('https://dummyjson.com/products').then((res)=>{
    res.json().then(data=>{
      console.log(data)
    })
 }).catch((error)=>{
    console.log(error)
 })
}
fetchData()