// Prototype



const ss =  'Hello I am string';

// ss.charAt();
// ss.charCodeAt();
// ss.concat()


//  In Javascript , Objects have a special  hidden property [[Prototype]] that is either null or referenece to another oBJECT 
// tHTA Objects is called th "prototype"


String.prototype.danceKar = function () {
    console.log('maine dance kia');
}

const raja  = 'Babu';
raja.danceKar();



// How to know the Prototype of any Object

//  __proto__

// Setting the prototype 


let Animal = {
    eat: true ,
    walk: true,

}

const cow = {
    legs: 4 ,
    eyes: 2
}

console.log(cow.legs)

cow.__proto__ = Animal;

console.log(cow.eat)

console.log(cow.__proto__) //  Animal.__proto__ => Object.__proto__ => NULL


const number = 2;
// cons


Array
const array  = [1,2,3,4];
const array1  = [1,2,3,4];
const array2  = [1,2,3,4];
const array3  = [1,2,3,4];

console.log(array.length);
console.log(array1.length);
console.log(array2.length);
console.log(array3.length);

const chill = new String('Chilla');
const array33 = new Array(10);
const num = new Number(33);
const obj = new Object({})


// const aa = [1,2,43];  // = > Array
// aa.map(()=>{

// })


// 

// if i am able to add that function insdie Array than that will be apply to all array variable


Array.prototype.seperatedByHyphen = function() {
        return this.join('-')
}


console.log(array.seperatedByHyphen())



// create five object  

// A -> B ->C ->D ->E

const a = {a:123}

const b = {bbb:1234}

const c = {ccc:'c'}

const d = {ddd: 'e'}

const e = {ee:'enter thr world of protoype'}

a.__proto__=b;

b.__proto__=c;

c.__proto__= d;

d.__proto__= e;
// e.__proto__ = You cannot ste the cyclic prototype

console.log('A=>' ,a.__proto__, 'B=>',b.__proto__, "C=>",c.__proto__, 'd=>',d.__proto__ );

console.log(a) // 

// Prottypical inheritance



function CallMe ()  {

}


// console.log(CallMe.constructor === Function)
console.log(CallMe.__proto__ === CallMe.prototype)
console.log(CallMe.prototype) // this include constuctor
// console.log(CallMe.__proto__) // this will give you only prototype



// Function
function AprilFool  (){
    this.name = 'Fufa',
    this.lastName= 'Mausa'
}

const aprilFoolObject  =  new AprilFool(); 



console.log(aprilFoolObject.constructor === AprilFool)
console.log(aprilFoolObject.constructor.constructor =  Function)



var  tararampa  = 'tararampam';
console.log(tararampa.constructor.constructor)

// var tararampa =  new String('tararampam')
// var boolean  =  true; boolean.constructor === Boolean




// Contructor  => This is the property of every object in javascript except the null object, which returns the 
// instance of the constructor function that created the instance object

function Month () {
    this.firstMonth = 'Jan'
    this.getAllMonths = function() {
        return  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    this.lastMonth = 'Dec'
}

var  monthsObj =  new Month();
console.log('================ Month ======================')

Month.prototype.getWinnerOfIPL2024 =  function  () {
    return 'CSK'
}
console.log(monthsObj.constructor) // Month

console.log(monthsObj.__proto__)
console.log( 'Prototype', Month.prototype) // C
console.log( 'Prototype', String.prototype) // C



const arrayExample = [1,2,3,4];  //  by default array will inherited all the properties from Array.prototype  object

 // array.constructor = > Array (constuctor function)

 // IF I want add one properties to all the array = > Array.prototype 


//  Array.prototype.mid = function () {
//     return this/2;
//  }


 // array.__proto === Array.prototype

 console.log(array.__proto__ == Array.prototype)


 // Every constructor have a protoype property , which will become the instances [[prototype]]
 // when called view new operator (when we create instanced using new keyword then hidden property of 
//  new instanced(x) will point to the constructor property protoype)
const m1 = new Month();
// m1[[protoype]] => Month.prototype
const sahana = 90;
console.log(sahana.__proto__ ==  Number.prototype) // true 


 
// // Jo variable or(instance) ham create karte han using any constructor with new keywrod uss instance ke pass constructor property ha jo ki point out karti us constructor function jisse ye variable(instance create hua ha)