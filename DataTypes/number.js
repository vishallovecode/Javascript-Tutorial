// // Number
// var n1 =2345;
// var n2 = 34567.2345;
// console.log('n1=>',typeof n1 ,"n2=>", typeof n2)


// // Creating number variable using Number Constructor

// var a =  new Number(40);
//  var aa =  a+40 ; //  80
// // TODO:1
// // This will be cleare at the time when constructor function and object data type is completed
// console.log('a=', a , 'type=', typeof a) // object

// // technically n2 is decimal number i want to get number from  decimal value??
// // parseInt()
// var n3 = parseInt(n2);
// console.log('n3=>' ,n3)


// // floor and ceil round off

// var n4  = Math.ceil(n2); // roof it will give above alue 3.4 => 4
// var n5 = Math.floor(n2); // jameen it will give lower value 3.5 => 3
// console.log('n4=>' , n4 , 'n5=>', n5)

// //
// // 2.4 =>3
// //  2.4=> 2


// // Math.random();

// //  This will generate the random values b/w 0-1 and 1 is not included


// // for(var k =0;k<10;k++) {
// //     var ran =  Math.random(); //
// //     console.log('random 0-1' , ran)
// // }


// for(var k =0;k<10;k++) {
//     var ran =  Math.random()*10; //
//     console.log('random 0-10' , ran)
// }

// for(var k =0;k<100;k++) {
//     var ran =  Math.random()*100; //
//     console.log('random 0-100' , ran)
// }


// // 0-1
// // Math.random( )> 0,1 => 0 , .1 , .2 , .5 , .6 , ..... , .99999 , 1

// // 0-10



// // 0-10 => 0<=9
// // Math.random() => .3*10 => 3 , 9.9 , 


// // .1*10 =>1 

// // .999*10 => 9.9


// // Generate  the random number between , 50 to 90


// var min  =50 ;
// var max  =90;
// for(var j =0;j<20;j++ ) {
// // here i will create 100 random number b/w 50 to 90 (include me)
// // Math.random() => decimal => parseInt , Math.ceil  and Math.floor
// // this will include the max value
// var random = Math.floor(Math.random()*(max-min+1)+min);
// console.log('random=>' , random)
// }
// // Math.random()*(90-50+1)+50
// // Math.randomw()*41 +50;
// // Math.randomw()*41  0-41 , 41 will be not included , 40.99999999999+50 => 90



// // include => inclusive
// // exclude => exlusive

// // Guys  => Include me
// // Guys=>  Exlude me

// // Math.random()* => 0-1=> .99999999999999


// // Math.random()*(90-50);
// // Math.random()*40  + 50 // => 0-40

//  // TODO:3
// function generateNumber (min , max) {
//     return Math.floor(Math.random()*(max-min+1)+min);
// }

// // generateNumber(90 , 190);

// // Math.min()
// // This function will take the multiple parameter and it will return the value which is minimum among all


// const minimum  = Math.min(-1 , -30 , -49 , 100 , 4 , 5 , 6);
// console.log('Minimum =>' , minimum)


// // Math.max()
// // This function will take the multiple parameter and it will return the value which is maximum among all


// const maximum  = Math.max(-1 , -30 , -49 , 100 , 4 , 5 , 6);
// console.log('Maximum =>' , maximum)



// // String  the value which closed by single quote or double quote is called string

// var  numeric = '23456'; // this is called the numeric string

// console.log(typeof numeric) // string


// // 1. use parseInt()
// const intS = parseInt(numeric)
// const ints2 = +numeric;
// console.log('intS' , typeof  intS)
// console.log('ints2' , typeof  ints2)

// // accessign dom 

// // Todo: 2
// var inputValue = document.getElementById('input').value;
// console.log('inputValue=>', inputValue , 'type=>' , typeof inputValue )

// // to convert numeric string into number we can use two ways



// // parseFloat 

// const numeric1 ='1245.555';

// console.log('float', parseInt(numeric1))
// console.log('float', +numeric1)
// console.log('float', parseFloat(numeric1))

// PLUS DISADVANTAGE


var a11 ='234Vishal';

var  b11 = '23Vishal2345';

 var b12 = 'vishal1234'

// parseInt() this will return the number always
// if we cannot convert the things in number it gives NAN => NOT A NUMBER
// IF WE APPLY ANY OF THE ARITHMATIC OPERATION TO ALPHANUMERIC VALUE IT GIVES US A NAN
var a12 = parseInt(a11);
var a13 = parseInt(b11);
var a14=  parseInt(b12)

console.log('a11' , +a11) // NaN
console.log('b11' , +b11) //NaN
console.log('b12' , +b12) // NaN

console.log('a12==' , a12) // 234
console.log('a13==' , a13) // 23
console.log('a14==' , a14) // NaN