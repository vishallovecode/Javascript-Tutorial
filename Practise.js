
// var  age =  30 ;

// var isPersonUnderAge  = age>=18 ? false: true; 

// // if(age>=18) {
// //     isPersonUnderAge = false
// // } else {
// //     isPersonUnderAge = true
// // }


// if(isPersonUnderAge) {
//     // write some bigger code
// } else {
//  // write some bigger
// }

// // Ternary operator is more performatic than if else


// var b =50;

// function sum () {
//     return b+50;
// }

// var c = b + sum();


//  console.log(1<2<3) // true
//  console.log(3>2>1) // false


//  console.log("2" < 3);  

//  console.log("A" < "B"); 
 
//  console.log("2" < 3);  // true

//  console.log('' <  3); //  falsyValue <3 => 0<3 => true


//  console.log("a">"2"); //   // 

// Todo
// console.log("a" > 2); // here JS is considering the 'a' as a truthy value so that is converted into the number the value of truthy  value in number is 1  
// // as result 1>2 => false

// // number zero is consider as a falys value string zero is not na falsy value
// // number  => 0
// // string  => ''
// var  a = 0; //  
// var  b = '0' // 
// var c = null;
// var d = undefined


// console.log(Boolean(a)) //  false
// console.log(Boolean(b))  //  true
// console.log(Boolean(null)) //   false
// console.log(Boolean(d)) // false



console.log('a' > 2);



// String and String compariosn 
// Here javascript convert both string into the ascii code  and check one by one if any string encountered with bigger ascii code this will  consider that string as tru


console.log("'ABCDE'<'D'",'ABCDE'<'D')

console.log('A' < 'a') // 65 < 97 => true

console.log('Vishal' < 'VISHAL') //  




// // Number and BOOLEAN
// // here boolean will converted into number true => 1 , false => 0
// console.log(2 > true);  // =>   2>1

// console.log( 0 >= false); // 0>= 0


// //  Boolean 
// // boolean will be converted int number 


// console.log(true > false) //  1 >0


// // String and number


// console.log('AAAAA' > 5);



// //  undefined =>it will be assigned to the variable which is decalred but not initialized
// //  We can assigned the undefined value to the  variable as well


// var  checker;
//  var checker2 = undefined;

// console.log(checker) //  undefined
// console.log(checker2) //  undefined


// console.log(typeof undefined) // 'undefined'

//  //conveting undefined into boolean always gives false;

//  // null

//  // important
//  console.log(typeof null) // object

//  // null and undefined are diff data types , null  is object and undefined is undefined datatypes
//  // null will be assigned by the developer , but undefined can be assigned by developer but  javascript also assigned undefined
//  // value to the uinitialized variable


//  // conveting  boolean 

//  console.log(Boolean(null)) // false


//  // NaN => JS consider it as one of the value of number in js;
//  // typeof NaN => 'number'

//  // BOOLEAN 
//  console.log(Boolean(NaN)) // false


//  // null  =>  primitive vs non-primitive
//  // typeof null => object => primitive data types

//   var employee = {} // this is object 

//   console.log(employee instanceof Object) // true

//   console.log(null instanceof Object) //  false

//   console.log(23 instanceof Number); // true
//   console.log(NaN instanceof Number); // false 


 








// //   class A {

// //   }

// //   A a =  new A(); // A class contsructor


// console.log(Number('1')) //  1

// console.log(Number(false)) // 0 // 

// console.log(Boolean('false')) //  here 'false'  is string which is truthy value Boolean 
//  // will convert it into the true => true

// console.log(Boolean(false)) // false

// console.log('13'-11); //  2

// console.log('2'/'2'); //1 


// console.log(35 + -'3' -false + true + '80'); // 3380



// // 

//  var a = new String('Vishal');

//  console.log(typeof a) // object


//  var b =  String('Vishal'); // string

//  console.log(typeof b) 



 
// diff == and === 
// equal operator(==)=> this will check the value only and here type coercion happen;

// strict equal operator(===)=> this will check type and  value   


console.log('checker@@@@@@@@@@@')

console.log(true ==  1) //  true => 1 ==1 //  true

console.log(false == null) //  false // special case (pitfall)

console.log(null == undefined) // true  NULL=> 0 ==  UNDEFINED=>0 (special case)

console.log(undefined ==  NaN) //  undefined =>0 ==NaN => FALSE

console.log(undefined==0) //   false ()

console.log(null<=1) //  0<=1 // true

console.log(null <='hey') // 


console.log(NaN ==  false) // NaN == 0 // FALSE

console.log(undefined == 'undefined') // UNDEFINED MEANS NOTHING // FALSE

console.log(null == 'null') // false


console.log(null == 0); //  false  special case // 


// null means absence of value, and 0 is value itself

console.log(NaN==NaN) // FALSE


console.log(NaN===NaN) // FALSE


// +'ZSDC' =>NaN
// +'ZSSCSDC' =>NaN


// The Abstract Equality Comparison Algorithm
// The comparison x == y, where x and y are values, produces true or false. Such a comparison is performed as follows:

// If Type(x) is the same as Type(y), then
// If Type(x) is Undefined, return true.
// If Type(x) is Null, return true.
// If Type(x) is Number, then
// If x is NaN, return false.
// If y is NaN, return false.
// If x is the same Number value as y, return true.
// If x is +0 and y is −0, return true.
// If x is −0 and y is +0, return true.
// Return false.
// If Type(x) is String, then return true if x and y are exactly the same sequence of characters (same length and same characters in corresponding positions). Otherwise, return false.
// If Type(x) is Boolean, return true if x and y are both true or both false. Otherwise, return false.
// Return true if x and y refer to the same object. Otherwise, return false.
// If x is null and y is undefined, return true.
// If x is undefined and y is null, return true.
// If Type(x) is Number and Type(y) is String,
// return the result of the comparison x == ToNumber(y).
// If Type(x) is String and Type(y) is Number,
// return the result of the comparison ToNumber(x) == y.
// If Type(x) is Boolean, return the result of the comparison ToNumber(x) == y.
// If Type(y) is Boolean, return the result of the comparison x == ToNumber(y).
// If Type(x) is either String or Number and Type(y) is Object,
// return the result of the comparison x == ToPrimitive(y).
// If Type(x) is Object and Type(y) is either String or Number,
// return the result of the comparison ToPrimitive(x) == y.
// Return false.
// NOTE 1Given the above definition of equality:

// String comparison can be forced by: "" + a == "" + b.
// Numeric comparison can be forced by: +a == +b.
// Boolean comparison can be forced by: !a == !b.
// NOTE 2The equality operators maintain the following invariants:

// A != B is equivalent to !(A == B).
// A == B is equivalent to B == A, except in the order of evaluation of A and B.
// NOTE 3The equality operator is not always transitive. For example, there might be two distinct String objects, each representing the same String value; each String object would be considered equal to the String value by the == operator, but the two String objects would not be equal to each other. For Example:

// new String("a") == "a" and "a" == new String("a")are both true.
// new String("a") == new String("a") is false.
// NOTE 4Comparison of Strings uses a simple equality test on sequences of code unit values. There is no attempt to use the more complex, semantically oriented definitions of character or string equality and collating order defined in the Unicode specification. Therefore Strings values that are canonically equal according to the Unicode standard could test as unequal. In effect this algorithm assumes that both Strings are already in normalised form.

// 11.9.4The Strict Equals Operator ( === )
// The production EqualityExpression : EqualityExpression === RelationalExpression is evaluated as follows:

// Let lref be the result of evaluating EqualityExpression.
// Let lval be GetValue(lref).
// Let rref be the result of evaluating RelationalExpression.
// Let rval be GetValue(rref).
// Return the result of performing the strict equality comparison rval === lval. (See 11.9.6)