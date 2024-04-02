// (
//     ()=>{

//          var a =b =3
//          // = >
//          var a =3 ;
//          b=3;
//         //  var a =3 ;
//         //   var b =a
//         d =100
//     }
// )()

// console.log(d)
// console.log( b )
// console.log(a)




// function openSurjeetDimag() {
//     var a =b=c=d=e=100;
//     let a1 = b1 =100'

//     console.log(a1)
// }


// openSurjeetDimag() // 
// console.log(b1)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)

// // console.log(a1)

// =================================== Pass By Value and Pass by reference ====================================


//  Pass By Value
// All the primitive data type are pass by value

const passByValue = 100;

 var data  =  passByValue;

  data  = 300;

 

  function printData(param1) {
    console.log(param1)
  }


  printData(100) // here you are passing the value not the address of the variable


  // Pass by reference  

  // All the non-primitive data type are pass by reference 

  // Object and array > here array are only object

  var employee = {
    name: 'XYZ',
    org: 'TITATI'
  }

  const employee1 = employee // here we are assigning the address of employee into the employee1


  employee1.name = 'RealName'

  console.log(employee)  //{name: 'RealName', org: 'TITATI'}
  console.log(employee1) //{name: 'RealName', org: 'TITATI'}

  