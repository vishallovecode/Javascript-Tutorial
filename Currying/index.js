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
// 5-10
function sum(a) {
  if(a===undefined || a===null) {
    return new Error('something went worng')
  }
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
// sum(1)()
// sum(1)(2)(3)(4)(5)....(n)();




// 

// currying  
// event loop (how async code runs )
// debouncing  and throttling




// Complete a below functions  (JP Morgan , Razorpay , Rippling, Intui , avis budget group , zepto, dehaat, mosaic welness )
// 
 // 20-25
 // 10 
function multiply(a,b,c) {
    return a*b*c; //  1*2*3
}

function curry (func) {
  // write your code here

  // func.length ?/  // 3
  return  function curried(...args) {
      if(args.length >= func.length) {
        func(...args)
      } else {
        return  (...arg2) =>{
          const mergeArg =  [...args  , ...arg2]  // => [1,2]
            return curried(...mergeArg) // currid(1,2 ,3)
        }
      }
  }
}

const curried = curry(multiply); // returning new function .... 

function curried (a) {
  return (b)=>{
    return (c)=>{
        return a+b+c
    }
  }
}
curried(1)(2)(3) // 6 
curried(1,2)(3); // 6
curried(1,2,3); // 6
curried(1)(2,3); // 6
