// Number
var n1 =2345;
var n2 = 34567.2345;
console.log('n1=>',typeof n1 ,"n2=>", typeof n2)


// Number Constructor

var a =  new Number(40);
// TODO:1
// This will be cleare at the time when constructor function and object data type is completed
console.log('a=', a , 'type=', typeof a)

// technically n2 is decimal number i want to get number from  decimal value??
// parseInt()
var n3 = parseInt(n2);
console.log('n3=>' ,n3)


// floor and ceil round off

const n4  = Math.ceil(n2); // roof
const n5 = Math.floor(n2); // jameen
console.log('n4=>' , n4 , 'n5=>', n5)

//
// 2.4 =>3
//  2.4=> 2


// Math.random();

//  This will generate the random values b/w 0-1 and 1 is not included


// for(var k =0;k<10;k++) {
//     var ran =  Math.random(); //
//     console.log('random 0-1' , ran)
// }

// for(var k =0;k<10;k++) {
//     var ran =  Math.random()*10; //
//     console.log('random 0-10' , ran)
// }

for(var k =0;k<100;k++) {
    var ran =  Math.random()*100; //
    console.log('random 0-100' , ran)
}








// .1*10 =>1 

// .999*10 => 9.9