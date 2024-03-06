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




//

 var num3 = 23455678;
var num3S  =  num3.toString(); //  '23455678'
var length =  num3S.length;
console.log(length)

 console.log(num3.toString().length)

 // Conveting Array into string

//  join

 var array = [3,4,5,6,7,8];
 console.log(array.join('?')) // '3?4?5?6?7?8'
 console.log(array.join('-')) // '3-4-5-6-7-8'
 console.log(array.join('')) // '345678'
 console.log(array.join('---')) // '3---4---5---6---7---8'



// TODO:Prototype

Array.prototype.myJoin  = function  (seperator) {
    var s = ''
    for(var i =0;i<this.length;i++) {
        if(i===this.length-1) {
            s = s+ this[i]
        } else {
            s = s+ this[i]+ seperator
        }
    }
    return s;
}
// console.log(array.myJoin(':'))


function join (seperator , array) {
    var s = ''
    for(var i =0;i<array.length;i++) {
        if(i===array.length-1) {
            s = s+ array[i]
        } else {
            s = s+ array[i]+ seperator
        }
    }
    return s;
}
console.log(join(':' , array))

// 
var sentence = "Hello we are learning String datatype";

// IT will replace first value which is there in string
console.log(sentence.replace('Hello', `E`));


console.log(sentence.replaceAll('e', `E`));

 
console.log(sentence.startsWith('o we are' , 4)) // true
console.log(sentence.endsWith('datatype' ,10)) // false
console.log(sentence.startsWith('ello')) // false
console.log(sentence.endsWith('datatype')) // true

 // replace
 // substring 
 // concat
 // endWith
 // startWith
 // includes


