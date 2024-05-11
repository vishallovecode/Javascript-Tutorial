 // Optinal Chaining

// const data = undefined;
// let length =0;
// if(data)  {
//   length = data.length;
// } else {
//   console.log('hey')
// }

// const  employee = {
//     adress:{
//         country: {
//           value: 'India',
//           street: 'Vishnupuri'
//         }
//     }
// }


const  employee = {
    adress:{
        country: {
          value: 'India',
          state:{
            value: 'UP',
            city:{
              value: 'kanpur',
              distrcit:  {
                value: 'Kanpur sadar',
                street:null
              }
            }
          }
        }
    }
}


 // employee.adress.country.state.city.distrcit //  stri

 //employee.adress.country.state.city.distrcit.street.pincode
//  console.log(employee.adress.country.state.city.distrcit.street.pincode)
// if(employee && employee.adress && employee.adress.country && employee.adress.country.state && employee.adress.country.state.city && employee.adress.country.state.city.distrcit && employee.adress.country.state.city.distrcit.street && employee.adress.country.state.city.distrcit.street.pincode ) {
//   console.log(employee.adress.country.state.city.distrcit.street.pincode)
// } else {
//   console.log('Hey')
// }


// console.log(employee?.adress?.country?.state?.city?.distrcit?.street?.pincode)



// const person = {
//   name: 'Raja Ji',
//   lastName: 'Babu',
//   printName() {
//     console.log(this.name , this.lastName)
//   }
 
// }

// console.log(person?.printName)
// console.log(person?.printName?.())  // ?.

//  // optinal chaining guys this will check the value before "?" and if the value is undefined and null  then it will not proceed for reading or 
//  // executing next part after "?"

 
 

//  // map , filter , split , join reduce

//  const jaja = [1,2,3];
// //  Array.prototype

// jaja.map(()=>{
  
// })

// const aja = 'Nahi Ayung😛'
// // here the map function is only can be use in array
// aja?.map?.(()=>{

// })


// aja && Array.isArray(aja) && aja.map(()=>{

// })

// ??


//  Currying 
//  Deep Copy  custom function  
//  compare two object 
//  flatten array 
// flatten object


// Nullish Coalescing  ?? 
 

let pp ;
const gg  = null;

// const res  = (pp!=null && pp!=undefined) ? pp : gg
const data  =  pp ??  gg ?? 'Raj'; // if pp is defined then pp else gg
console.log(data)
// Note => This operator returns the  first arguments  if its not null/ undefined  , otherwise the second one
//  ||  => This will return the first truthy value
//   ?? => This will return the first defined value
console.log('' || 'pp') //  pp
console.log('==>' , null ?? 'pp') //  pp 
console.log('' ?? 'pp') //  ''



// Javascript Object Shortahnd property 