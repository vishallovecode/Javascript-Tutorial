// String in Javascript

// Creating string variable
// 1. string literal
 var orgName = 'Newton';

//  2. Using String constructor

// Todo:5
var orgName1 = new String('Newton School ');

console.log(orgName1)
console.log(typeof orgName1)

// concatenation of string (jodna )

var s =  orgName1+orgName;
console.log(s)

var a = 'a'+'b'+'c'+'d';
 console.log(a)

 // length of string (length ) => it will give you the count of character or any special character or number

 console.log(s.length);

// @#$%....
 var  ss = '@34#$.!~234vishal  ';
 console.log(ss.length)

 // sometimes we need to convert number into the string

 var num = 234567;

 var numS = num.toString(); // converting number into the string
 console.log(typeof numS)


 var firstName  = 'Vishal' // ['V', 'i' ,'s', 'h','a','l']

 console.log(firstName[0])
 console.log(firstName.charAt(0)) // Java me bhi karte the

 // Reverse a string using javascript

//  function reverseString(s) {
//     // wrire code here
//     var ss ='';
//     for(var i =s.length-1 ;i>=0;i--){
//             ss = ss+ s[i];
//     }
//     console.log('reverse string=> ' , ss)
//  }
//  reverseString('Vishal')

var s1 ='Javascript'; 

console.log(s1.indexOf('J'));
console.log(s1.toLowerCase());
console.log(s1.toUpperCase());
console.log(s1.lastIndexOf('J'));

// CONVERTIN THE STRING INTO ARRAY 
// split()
console.log(s1.split(''));

var words = 'Vishal  Sharma Hello How are you ?';
console.log(words.split(' '));
console.log(words.split(''));

var sentence = 'Vishal-Sharma-Hello-How-are-you ?';
console.log(sentence.split('-'));
// var sentence = 're-you ?';
console.log(sentence.split('a'));





