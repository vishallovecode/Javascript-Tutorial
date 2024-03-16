console.log('Basic of object Js') //


// Object are non-primitive data type
// in javascript object are data structure which is used to store key and  value  pair
// Key should be unique

// creating the javascript object 

var a = {} // here we have created the empty Javascript object ;



// Creating employee object which is storing the  details of employee 
// In value you can pass any data type , or you can pass function as well

var employe = {
    name : 'ABC',
    orgName: 'Newton',
    mobile: 9915378881,
    timing: ['9:30am' , '5:30pm']
}

console.log(employe)

// adding keys and value dynamically
// here i am adding the adress key into employe object
employe.address = 'Kanpur';

console.log(employe)

// accessing the key

console.log(employe.name) // 'ABC',
console.log(employe.timing) // ['9:30am' , '5:30pm']
console.log(employe.address) //  'Kanpur'

// how to make key if there space between the character

// employe.Last Name = 'Sharma'  this will throw the error
employe['Last Name'] = 'Sharma' // this is how you can pass space seperated key in object

employe['city'] =  'Kanpur' // You can use indexing like array way to pass key

console.log(employe)


 var key = 'Country'

 // dynamic key assigning , here key is variable which is stroring the Country as value  
 // we want to make Country of the key of employe data
 employe[key] =  'India'


 // Todo : string templating