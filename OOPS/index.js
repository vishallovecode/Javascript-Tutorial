
// Creation of the Object  

// Note:1 => An object can be created with curly bracket {} , this method of creation Object is called object literal;

// Example: 1

const object = {}; // the varibale is now object type

var employee = {name: 'XYZ', orgName: 'Newton'}; 

var employee = {"name": 'XYZ', "orgName": 'Newton'};

var employee = {'name': 'XYZ', 'orgName': 'Newton'};

console.log(employee)
// var employee = {'name': xyz, 'orgName': lastName};  this will throw the error
// How to give key with the space seperated value
var employee = {
    'Organization Name' :  'Newton'
}
console.log(employee)
// How to give variable as a key  or dynamic key
var keyVariable = 'LastName';
var employee =  {
    [keyVariable]: 'Sharma'
}
console.log(employee)


 // How to access the value using  key ?? 

 //  with dot annotation

 var employee = {
    name: 'Vishal Sharma',
    orgName: 'Newton School',
    address: 'Kanpur',
    email:'785vishal443@gmail.com',
    'Bank Balance': 100,
 }


 console.log(employee.name)
 console.log(employee.orgName)
 console.log(employee.address)


 // with index annotation

 console.log(employee['name'])
 console.log(employee['orgName'])
 console.log(employee['address'])
 console.log(employee['Bank Balance'])


 // access the value using dynamic key

 var dynamicKey1 = 'orgName';
 var dynamicKey2= 'Bank Balance';
console.log(employee[dynamicKey1]) // =>console.log(employee['orgName']) 

console.log(employee[dynamicKey2]) // =>console.log(employee['Bank Balance']) 

