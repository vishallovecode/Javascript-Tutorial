console.log('Async Programming.....');


// browser apis  => setTimeout and setInterval


// Higher order functions or web apis which will take one or two parameter
// first parameter is function (callback function) and second parameter is delay 
// delay is nothing it is which will tell that after how much delay we want to call the callback function (first parameter)
//the value of delay (second parameter is in ms)
// 1sec = 1/1000
// 1000ms = 1sec
// // it will executt the callback  function only once
// setTimeout(()=>{
//   console.log('I will call after given delay , here delay is 2 sec')
// })


// // synchronous 
// for(let  i=0 ;i<100000;i++){
//   console.log(i);
// }



// // lift...=> 3 sec , `10 minutes
// // stairs => 1->2->3->4->5

console.log('Chaparayin...')

// setTimeout(()=>{
//   console.log('Back benchers...')
// }, 1000)

// console.log('Chapri')
// setTimeout(()=>{
//   console.log('kuch pta chala')
// },0)
// setTimeout(()=>{
//   console.log('hey')
// })
// setTimeout(()=>{
//   console.log('hey2')
// }, 10)
// console.log('Chapri2')
// var count  =0;
// setInterval(()=>{
//       console.log('HEY' , count++)
// }, 1000)


//setTimeout and setInterval return id


// setTimeout , setInterval
// Promises

// const promise = new Promise((resolved, rejected)=>{
//   console.log('Hey')
//     resolved('I am good...');
// })
// console.log(promise) // synchronous

// // async 
// promise.then((data)=>{
//   console.log(data)
// })

// // synchronous
// const starTime = new Date();
// console.log('StartTime',starTime)
// for(let i=0;i<50000;i++) {
//     console.log(i)
// }
// const endTime = new Date();
// console.log('EndTime',endTime)


// console.log('start')

// setTimeout(() => {
//   console.log('setTimeout')
// },0)

// Promise.resolve().then(() => {
//   console.log('resolve')
// })

// console.log('end')


// const promise = new Promise((resolve, reject) => {
//     console.log(1);
//     setTimeout(() => {
//       console.log("timerStart");
//       resolve("success"); //
//       console.log("timerEnd");
//     }, 0);
//     console.log(2);
//   });

//   promise.then((res) => {
//     console.log(res);
//   });

//   setTimeout(()=>{
//     console.log("Are!!")
//   } ,0)

//   console.log(4);


  // How javascript handle the asynchronous code 
  // How web apis like setTimeout and setInterval get executed
  // what is the priority of promise over the web apis
  // WHAT EVENT LOOP ??
  // What is microtask(Priority) and macro task queque
  // How callstack get executed ?? 



  // Promise  chaining 
  // Memization
  // Generator funciton 


console.log("Start");

document.getElementById('btn').addEventListener("click", function cb () {
  console.log('Callback')
})

console.log("End");


// web apis => setTimeout , setInterval , click () // macro 
//  observor  and promise  micro task