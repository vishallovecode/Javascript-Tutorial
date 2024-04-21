console.log('What is rest operator and what is spread operator')


// rest and spread operator is  defined by three dots (...)


// this is the rest operator 

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