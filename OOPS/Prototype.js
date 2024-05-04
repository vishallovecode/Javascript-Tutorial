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