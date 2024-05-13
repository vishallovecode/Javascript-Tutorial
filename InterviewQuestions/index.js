 // Currying => This can be acievable using closure

 function sum(a,b,c) {
  return a+b+c
 }
 sum(1,2,3) //  6
 function currySum(a) {
   // write your code here
   return function(b) {
      return function(c) {
        return a+b+c
      }
   }
 }
 const func  = currySum(100) // (90)(30);
const func2 =  func(90)
const result  = func2(30)
 console.log('result' , result)





 // Example-> 2 Given a nested array you need to flatten that array

 const array12  = [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[50]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
 // First Approach
 const array  = [1,2,[[[[[4,[[[[[0,[[[[[[[[10,[[[[2]]]]]]]]]]]]]]]]]]]]]]];

 // expected result   => [1,2,4,0,10,2];

 const exa = array.toString(); // "'1' ,'2','4','0','10','2'"

 const arrayex =  exa.split(','); // ['1','2','4','0', '10','2'] // +'1' =>  1

 const arrayResult = arrayex.map((ele)=>{
  if(isNaN(ele)) {
    return +ele;
  } 
  return ele;
 })


 // Second Approach
// flat(n)// level of nested array  , how much depth you want to  flat array , Infinity means go till all nested level;

console.log(array.flat(Infinity)) // [1,2,4,0,10,2]

console.log(array12.flat(Infinity)) // [50]



// Write you own function which will accept aray(which is nested ) and return the flat array

 // 
function flatten(arr , res) {
  // write your code here
  const result  = []  // 
  if(!Array.isArray(res)) {
    res= [];
  }
  if(!Array.isArray(arr)) {
    throw new Error (`${arr}, is not an array`)
  }
  for(let value of arr) {
    if(Array.isArray(value)){
      // repeat
      const updatedArray =  flatten(value);
      return result.concat(updatedArray)
      // return result.concat(flatten(value));
      // flatten(value , res)
    } else {
        result.push(value)
        // res.push(value)
        console.log('tm yeha aa rahe ho??', value ,result)
    }
  }
  return result;
  // return res
}
const customFlat = flatten(array);
console.log('customFlat' , customFlat)



const obj = {
  a:{
    b:{
      c:{
        d:{
          e:123
        }
      }
    },
    g: {r: 10}
  }
}

function flatObject() {

}

