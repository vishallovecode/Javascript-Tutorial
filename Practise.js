
// // var  age =  30 ;

// // var isPersonUnderAge  = age>=18 ? false: true; 

// // // if(age>=18) {
// // //     isPersonUnderAge = false
// // // } else {
// // //     isPersonUnderAge = true
// // // }


// // if(isPersonUnderAge) {
// //     // write some bigger code
// // } else {
// //  // write some bigger
// // }

// // // Ternary operator is more performatic than if else


// // var b =50;

// // function sum () {
// //     return b+50;
// // }

// // var c = b + sum();


// //  console.log(1<2<3) // true
// //  console.log(3>2>1) // false


// //  console.log("2" < 3);  

// //  console.log("A" < "B"); 
 
// //  console.log("2" < 3);  // true

// //  console.log('' <  3); //  falsyValue <3 => 0<3 => true


// //  console.log("a">"2"); //   // 



// // // number zero is consider as a falys value string zero is not na falsy value
// // // number  => 0
// // // string  => ''
// // var  a = 0; //  
// // var  b = '0' // 
// // var c = null;
// // var d = undefined


// // console.log(Boolean(a)) //  false
// // console.log(Boolean(b))  //  true
// // console.log(Boolean(null)) //   false
// // console.log(Boolean(d)) // false



// console.log('a' > 2);



// // String and String compariosn 
// // Here javascript convert both string into the ascii code  and check one by one if any string encountered with bigger ascii code this will  consider that string as tru


// console.log("'ABCDE'<'D'",'ABCDE'<'D')

// console.log('A' < 'a') // 65 < 97 => true

// console.log('Vishal' < 'VISHAL') //  




// // // Number and BOOLEAN
// // // here boolean will converted into number true => 1 , false => 0
// // console.log(2 > true);  // =>   2>1

// // console.log( 0 >= false); // 0>= 0


// // //  Boolean 
// // // boolean will be converted int number 


// // console.log(true > false) //  1 >0


// // // String and number


// // console.log('AAAAA' > 5);



// // //  undefined =>it will be assigned to the variable which is decalred but not initialized
// // //  We can assigned the undefined value to the  variable as well


// // var  checker;
// //  var checker2 = undefined;

// // console.log(checker) //  undefined
// // console.log(checker2) //  undefined


// // console.log(typeof undefined) // 'undefined'

// //  //conveting undefined into boolean always gives false;

// //  // null

// //  // important
// //  console.log(typeof null) // object

// //  // null and undefined are diff data types , null  is object and undefined is undefined datatypes
// //  // null will be assigned by the developer , but undefined can be assigned by developer but  javascript also assigned undefined
// //  // value to the uinitialized variable


// //  // conveting  boolean 

// //  console.log(Boolean(null)) // false


// //  // NaN => JS consider it as one of the value of number in js;
// //  // typeof NaN => 'number'

// //  // BOOLEAN 
// //  console.log(Boolean(NaN)) // false


// //  // null  =>  primitive vs non-primitive
// //  // typeof null => object => primitive data types

// //   var employee = {} // this is object 

// //   console.log(employee instanceof Object) // true

// //   console.log(null instanceof Object) //  false

// //   console.log(23 instanceof Number); // true
// //   console.log(NaN instanceof Number); // false 


 








// // //   class A {

// // //   }

// // //   A a =  new A(); // A class contsructor


// // console.log(Number('1')) //  1

// // console.log(Number(false)) // 0 // 

// // console.log(Boolean('false')) //  here 'false'  is string which is truthy value Boolean 
// //  // will convert it into the true => true

// // console.log(Boolean(false)) // false

// // console.log('13'-11); //  2

// // console.log('2'/'2'); //1 


// // console.log(35 + -'3' -false + true + '80'); // 3380



// // // 

// //  var a = new String('Vishal');

// //  console.log(typeof a) // object


// //  var b =  String('Vishal'); // string

// //  console.log(typeof b) 



 
// // diff == and === 
// // equal operator(==)=> this will check the value only and here type coercion happen;

// // strict equal operator(===)=> this will check type and  value   


// console.log('checker@@@@@@@@@@@')

// console.log(true ==  1) //  true => 1 ==1 //  true

// console.log(false == null) //  false // special case (pitfall)

// console.log(null == undefined) // true  NULL=> 0 ==  UNDEFINED=>0 (special case)

// console.log(undefined ==  NaN) //  undefined =>0 ==NaN => FALSE

// console.log(undefined==0) //   false ()

// console.log(null<=1) //  0<=1 // true

// console.log(null <='hey') // 


// console.log(NaN ==  false) // NaN == 0 // FALSE

// console.log(undefined == 'undefined') // UNDEFINED MEANS NOTHING // FALSE

// console.log(null == 'null') // false


// console.log(null == 0); //  false  special case // 


// // null means absence of value, and 0 is value itself

// console.log(NaN==NaN) // FALSE


// console.log(NaN===NaN) // FALSE


// // +'ZSDC' =>NaN
// // +'ZSSCSDC' =>NaN


// // The Abstract Equality Comparison Algorithm
// // The comparison x == y, where x and y are values, produces true or false. Such a comparison is performed as follows:

// // If Type(x) is the same as Type(y), then
// // If Type(x) is Undefined, return true.
// // If Type(x) is Null, return true.
// // If Type(x) is Number, then
// // If x is NaN, return false.
// // If y is NaN, return false.
// // If x is the same Number value as y, return true.
// // If x is +0 and y is −0, return true.
// // If x is −0 and y is +0, return true.
// // Return false.
// // If Type(x) is String, then return true if x and y are exactly the same sequence of characters (same length and same characters in corresponding positions). Otherwise, return false.
// // If Type(x) is Boolean, return true if x and y are both true or both false. Otherwise, return false.
// // Return true if x and y refer to the same object. Otherwise, return false.
// // If x is null and y is undefined, return true.
// // If x is undefined and y is null, return true.
// // If Type(x) is Number and Type(y) is String,
// // return the result of the comparison x == ToNumber(y).
// // If Type(x) is String and Type(y) is Number,
// // return the result of the comparison ToNumber(x) == y.
// // If Type(x) is Boolean, return the result of the comparison ToNumber(x) == y.
// // If Type(y) is Boolean, return the result of the comparison x == ToNumber(y).
// // If Type(x) is either String or Number and Type(y) is Object,
// // return the result of the comparison x == ToPrimitive(y).
// // If Type(x) is Object and Type(y) is either String or Number,
// // return the result of the comparison ToPrimitive(x) == y.
// // Return false.
// // NOTE 1Given the above definition of equality:

// // String comparison can be forced by: "" + a == "" + b.
// // Numeric comparison can be forced by: +a == +b.
// // Boolean comparison can be forced by: !a == !b.
// // NOTE 2The equality operators maintain the following invariants:

// // A != B is equivalent to !(A == B).
// // A == B is equivalent to B == A, except in the order of evaluation of A and B.
// // NOTE 3The equality operator is not always transitive. For example, there might be two distinct String objects, each representing the same String value; each String object would be considered equal to the String value by the == operator, but the two String objects would not be equal to each other. For Example:

// // new String("a") == "a" and "a" == new String("a")are both true.
// // new String("a") == new String("a") is false.
// // NOTE 4Comparison of Strings uses a simple equality test on sequences of code unit values. There is no attempt to use the more complex, semantically oriented definitions of character or string equality and collating order defined in the Unicode specification. Therefore Strings values that are canonically equal according to the Unicode standard could test as unequal. In effect this algorithm assumes that both Strings are already in normalised form.

// // 11.9.4The Strict Equals Operator ( === )
// // The production EqualityExpression : EqualityExpression === RelationalExpression is evaluated as follows:

// // Let lref be the result of evaluating EqualityExpression.
// // Let lval be GetValue(lref).
// // Let rref be the result of evaluating RelationalExpression.
// // Let rval be GetValue(rref).
// // Return the result of performing the strict equality comparison rval === lval. (See 11.9.6)



// // Comparing a(string) and b(number)
// // If Type(a) is String and Type(b) is Number,
// // Here javascript does coercion and  try to convert string into number

// console.log('a'>2);  // here a ='a' , b=2 , js try to convert a.toNumber => NaN>2 => FALSE

// console.log('a'<2);  // here a ='a' , b=2 , js try to convert a.toNumber => NaN<2 => FALSE



// //IF a  is string and b is string 
// // If Type(a) is String and Type(b) is also string
// // Then JS try to compare one by one or character to character if caharcter are same it will go for comparing next character so on, if any mismatch is there return false
// //  if x and y are exactly the same sequence of characters (same length and same characters in corresponding positions). Otherwise, return false.


// console.log('ABC'<'z')
// console.log('987'< '123456');  //'9'<'1'=> 9<1=> false
// console.log('9999'< '89991')



// // Null as A Special case
// // Null is treated as a special case ,at the time of equal comparison it will coersed (automatic conversion)
// // to the undefined
// // null==0 => false
// // null ==undefined = true


//  //relation comarsion me null will coresed (automatic conversion)
//  // thats why null>=0  true


// //  (function(){var a = b = 3;})();
//  var b =3;
// function callMe() {
//     var a = 3;
// }
// callMe();
// console.log(typeof a , typeof b);


// //false



// // Logical && Operator
// // In logical and (&&) operator result of the operation will have two conditin
// // if any of the condition is falsy(first) then that will be return
// // Else the last condition will be return=

// // cond1 && cond2 
// // true(cond1) && false(cond2) => then return the value which is making whole condition false(cond2)
// // false(cond1) && true(cond2)  => then return the value which is making whole condition false(cond1)
// // true(cond1) && true (cond1) => this will return last true condition (cond2)

// console.log('0 && 3' , 0 && 3) //  // false && true
// console.log('1 && 0' ,1 && 0) // true && false

// console.log('4 && 3' , 4 && 3) //  true && true
// console.log('0 && ""' ,  0 && '') // false && false


// console.log(2 && 3 &&  4 && 5 )  //=> 5

// console.log(2 && 3 &&  4 && 5  && 0 )  //=> 0


// // Logical || Operator




// // In logical XOR operator result of the operation will have two conditin
// // if any of the condition is truth(first) then that will be return
// // Else the last condition will be return





// for(var i=0;i<5;i++){
//     console.log('inside the loop' ,i) 
// }
// console.log('outside the loop' , i)



// iife

//  (function(p){
//     var a =60;
// })(900)


 


// (
//     function (p) {
//         function  data()  {
//             var c = 90;
//             console.log(c ,p)
//         }
//         data()
//     }
// // )(900)


// function callMe() {
//     var data =900;
//     var data = 600;
//     var data = 800;//  error here data is already declared you cannot redeclared it using let and const
//     console.log(data)
// }

// callMe()

// function callMe() {
//     var data =900;
//     var data = 600;
//     let data = 800;//  error here data is already declared you cannot redeclared it using let and const
//     console.log(data)
// }

// callMe()




// // 

// var trees = ["pine","apple","oak","maple","cherry"];
// delete trees[3]; //  it will delete the thir index
// console.log(trees.length); // 4



// var a = [1, 2, 3];
// a[10] = 99; //  [1,2,3 , undefined , undefined , undefined , undefined , undefined, undefined , undefined , undefined , undefined , 99]
// console.log(a[6]); //   undefined


// function call(b,...array) {

// }
// console.log(call.length) //  1 / function.length give you the count of paramater





// var Employee = {
// company: 'Acme'
// }
// var employee1 = Object.create(Employee); // Todo   
// delete employee1.company
// console.log(employee1.company);  // 'Acme'


// var z = 1, y = z = typeof y;
// console.log(y); // 'undefined'



//  console.log(typeof amnvshsvcbnsshgvxghsbdcvs); // "undefined"


//  // Hoisting
//  var foo = 1;
// (function () {
//   console.log(foo); // 
//   foo = 2;
//   console.log(window.foo); // 
//   console.log(foo); // 
//   var foo = 3;
//   console.log(foo); // 
//   console.log(window.foo) // 
// })()


// let dev = 'Newton'

// function a() {
//   let dev = 'CHECKER'
//   return function() {
//     console.log(dev) //  'Checker'
//     // lexical + parent lexical  dev: 'Checker'
//   }
// }

// dev = 'Lets learn'

// const check12 = a()();
// console.log(check12());


// var obj = {
//     a: "Vishal",
//     b: ("Sharma" ,  'Raj'), //  Raj 
//     func: (function foo(){ return this.a; }, function bar(){ return this.b; }) //  function bar(){ return this.b;}
//   }

//   console.log(obj.func()) 

//   const likeMe = ('Hey' , "I am cool");
//   console.log(likeMe) // I am cool



// var a = 'Vishal'
// let b = 'Sharma'
// console.log(this.a)  //  'Vishal' // 
// console.log(this.b) //  UNDEFINED  here this means global; scope and let and const variable are not the part of global object in GEC





// const object = {};
// object.b  // ??   undefined


// function foo(a, b, undefined, undefined) {
//     console.log('Vishal Sharma')
//   }
//   console.log(foo.length) //  4
 
// 10 Minutes

console.log([] + [])  // [] + [] => '' + '' => '' // here the plus operator try to convert the  [] array into string emptyarray to string is ''
console.log([] + 1) // "" + 1 => '1'
console.log([[]] + 1) //  '' + 1 => '1'
 console.log([[1]] + 1) //  "1"+ '1'  => 11
console.log([[[[2]]]] + 1) // '21'
console.log([] - 1) //  -1
console.log([[]] - 1) // -1
console.log([[1]] - 1)  // '1'-1 //  0
console.log([[[[2]]]] - 1) //  '2' -1 //  1
console.log([] + {}) //    ?? 
console.log({} + {}) //  NaN ?? 
console.log({} - {})  // ?? 