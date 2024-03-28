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





// Whenever javascript try to access the variable from the their scope, Javascript use lexical scoping to find out the variable  
// lets say if you want to access the variable which is defined in Gec and you are trying to access inside the function  , first it will look for function scope ,
// if it does exist it will go for parent scope


// whenever you call the function inside the function, lets say p1 is parent function and c1 is child function 
// if c1 is defined outside of p1 , and called inside the p1 , in that case if javascript try to read  variable it will first look into 
// the local scope of c1 if not then it will not look for p1 because lexical scoping in function depends on where the function 
// is declared  not where it is called