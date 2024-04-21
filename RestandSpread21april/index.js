console.log('What is rest operator and what is spread operator')


// rest and spread operator is  defined by three dots (...)


// this is the rest operator  (rest parameterts)

function multiply (...params) {
        console.log(params) // this will give you the array of param
       let multiply = 1;
       for (let value of params) {
        multiply= multiply*value
       }

    //    console.log(multiply)
}

multiply(1,2,3,4,5,6,7,8,9);

multiply(1 , 10);


multiply(1 , 10 , 10, 10);


function exampleRest(a,b , ...d) {
        console.log(a ,b,d)
}
exampleRest(1,2 , 4,5,6,7,8,9)



// spread opeartor is just opposite to the rest

const array  = [1,2,3,4,5];

console.log(...array) // spread




function callme(a,b ,c) {
console.log(a,b)
}


const data  = ['name' , 'lastName' , 'raj']

callme(...data) // this will just do opposite to the rest operator
callme('name' , 'lastName', 'raj') ;





function sum (...numbers) {
        console.log(numbers)
        console.log(...numbers) // 1 2 3 4 5 6 7 8
}



sum(1,2,3,4,5,6,7,8);


