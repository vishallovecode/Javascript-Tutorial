// Execution Context  => The environment  where your Js Code is Executed
// Execution Context Have two types =< Global Execution Context and Functional Execution context

// GlobalExecution Context => This will be created by browser whenever it encountered the 
// Js file it will be created by default 
// In Gec all the code will be executed except the code inside the function 

// The code inside the function is executed in functional  executed context 
//We can have multipke execution context but there will be only one GEC



var a  =60 ;

const b =40 ;

let c =50;


 function add(x, y ,z,) {
    var result = x+y+z;
    console.log(result)
 }

 add(a ,b,c)


 console.log(a,b,c)





