// console.log('Hey Mujhe Cuurry Sikhan ha bnana nahi  , Javscript me likhna');

// // closures 

// function exampleClosure (a) {
//     let outer = 'Cool';
//     return function inner (b) {
//       let killer = 'Digvijay';
//       console.log('inner ' ,killer)
//      return  function innerMost (c) {
//         let pinewala = 'Lohit';
//         console.log('innerMost ' ,pinewala)

//        return function sabseBhitar(d){
//           let fhekneWla = 'Abhishek'; 
//           console.log('sabseBhitar ' ,fhekneWla)
//           const sum  = a+b+c+d;
//           console.log(sum)
//         }
//       }
//     }
// }


// // const  innerFunc = exampleClosure(20);
// // const innerMost = innerFunc(30)
// // const sabseBhitarFunc = innerMost(60)
// // sabseBhitarFunc(70)
// // sabseBhitarFunc(100)

// const result  = exampleClosure(20)(30)(60)(100); // ye jo khurpechi kari na yehi currying ha




// function sum (a) {
//   return (b)=>{
//     return  (c)=>{
//       return (d)=>{
//        return a+b+c+d;
//       }
//     }
//   }
// }


// // 10


// const sum12 = (a)=>(b)=>(c)=>(d)=> a+b+c+d;

// console.log(sum(1)(2)(3)(4))

// console.log(sum12(1)(2)(3)(4))



// Infinit curry 

function sum(a) {
  return (b)=>{
    if(b) {
      return sum(a+b)
    } else {
      return a
    }
  }
}

sum(1)(2)();
sum(1)(2)(3)();
sum(1)(2)(3)(4)();
sum(1)(2)(3)(4)(5)();
// sum(1)(2)(3)(4)(5)....(n)();
