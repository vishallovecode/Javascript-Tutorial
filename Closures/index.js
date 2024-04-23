
const userName= 'Vishal Sharma';

const orgName= 'Newton School'

function Outer() {
    const data = 30;
    const data2 = 40;
    function inner() {
        const innerData = 30;
        const  innerData2 =  40;
       console.log(data , data2) 
//  30  , 40
      console.log(innerData , innerData2 ); 
//  30 40 

    }
    inner();
}


Outer();


// lexical environment (scope) = >  // it the place where  variable and function declaration 
                            // of particular execution context or scope is stored , 
                            // it have reference of its parent lexical environment;

// lexical scope chaining = >   // we can access the variables of all the parents execution context (functions) from the innermost  function
                                // where each lexical scope  have reference to it parent lexical scope;

// Closures => It is the combination of function and its lexical environment is called the closures