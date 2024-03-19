console.log('discussing for of and for in Loop')


// while loop 
// for loop


// print number till 100

// let count = 0;

// // for(let count =0;count<=100;count++) {

// // }
// while(count<=100) {
//     console.log(count);
//     count++;
// }


const array = [11,12,13,41,51,16,17,80];

// imperative loop => In this type of loop  we have control  , you can spell out eacht step explicitly
// imperative loop=>  we have a control over iteration

// for(let i=0;i<array.length;i++) {
//     console.log(i , "=> " ,array[i])
// }

// declrative loop => we do not have control on the things , it will done what you want 
// we do not have control over iteration
// for ... in loop
// for in loop use for iterating the index of array
for(let idx in array) {
    console.log(idx , "=> " ,idx, array[idx]  ) 
}



//for...of

// for of loop iterate through the value of array
for(let value of array) {
    console.log('for of ' , value)
}



// for...of loop we cannot apply into the object but we can apply for in loop into the object
// for.. in loop  iterarte and gives us object keys


const employee = {
    name: 'Vishal',
    lastName: 'Sharma',
    address: 'Vishnupuri kanpur'
}

// for(let value of employee) {
//     console.log('for of employee ' , value)
// }

for(let key in employee) {
    console.log('for of employee ' , key)  // this will return the value here we are using variable key 
    console.log(employee[key]) // 

    //  to access the value of object using key thats why we put the key with []=> this bracket
    
    // here key is  pointing to the key of employee object
}


function add(x, y) {
    return x + y;
  }
  
  function multiply(x, y) {
    return x * y;
  }
  
  function calculator(x, y, operation) {

    // x=2
    // y=3
    return operation(2, 3);
  }

  calculator(2, 3, add);



  function greeting(name) {                        
    console.log('Hello ' + name);
  }
  
  function processUserInput(callback) {
    // callback =  greeting => reference of function
    var name = 'John';
    // greeting('John')
    callback(name);
  }
  
// function passed as a  whole value and reference
  // function
  console.log(greeting) //  function greeting(name) {console.log('Hello ' + name);}
  processUserInput( function greeting(name) {console.log('Hello ' + name);});



// function add (a) {
// // a =30
// }


// var ddd =30;
// add(ddd);