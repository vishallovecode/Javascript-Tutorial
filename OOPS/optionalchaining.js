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


console.log(employee?.adress?.country?.state?.city?.distrcit?.street?.pincode)
