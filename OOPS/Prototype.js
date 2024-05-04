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
    walk: true
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