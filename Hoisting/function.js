// Execution Context  => The environment  where your Js Code is Executed
// Execution Context Have two types =< Global Execution Context and Functional Execution context

// GlobalExecution Context => This will be created by browser whenever it encountered the 
// Js file it will be created by default 
// In Gec all the code will be executed except the code inside the function 

// The code inside the function is executed in functional  executed context 
//We can have multipke execution context but there will be only one GEC
// var a  =60 ;
// const b =40 ;
// let c =50;
// var globalVariable = `
// Hey I am 
// global 
// variable`

//  function print(res) {
//    var firstName = 'Vishal'
//    let lastName = 'Sharma'
//    const message = `Hi, ${firstName} 
//    ${lastName} 
//     Your score is:  ${res}`
//    console.log(message)
//    console.log(globalVariable)
//  }
//  function add(x, y ,z,) {
//     var result = x+y+z;
//     print(result) 
//     console.log('add end')
//  }
//  add(a ,b,c)
//  console.log(a,b,c)






var a  =60 ;
const b =40 ;
let c =50;
var globalVariable = `
Hey I am 
global 
variable`

 function print() {
console.log(globalVariable)
console.log(x)
console.log(result)

 }
 function add(x, y ,z,) {
    var result = x+y+z;
    console.log(globalVariable)
    print() 
 }
 add(a ,b,c)
 console.log(a,b,c)





