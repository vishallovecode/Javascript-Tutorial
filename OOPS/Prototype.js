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
cons



