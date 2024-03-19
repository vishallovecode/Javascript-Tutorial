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
    console.log('for of employee ' , key)
    console.log(employee[key]) // this will return the value here we are using variable key 

    //  to access the value of object using key thats why we put the key with []=> this bracket
    
    // here key is  pointing to the key of employee object
}