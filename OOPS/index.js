
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


// Creating the object uisng Object Constructor

console.log(`%cObject Creation with constuctor`,'color: #00ff33; font-size: 20px')

var person  = new Object({name: 'xyz' , lastName: 'rat'});

console.log(person)


console.log(`%c How to get all  the keys of object`,'color: blue; font-size: 20px')

 //  Object.keys() => this will accept the object as a argument and return the array of object keys

 var employee = {
    name: 'Vishal Sharma',
    orgName: 'Newton School',
    address: 'Kanpur',
    email:'785vishal443@gmail.com',
    'Bank Balance': 100,
 }

var keys =  Object.keys(employee);
console.log(keys) //  ['name', 'orgName', 'address', 'email' , 'Bank Balance']

console.log(`%c How to get all  the value of object`,'color: yellow; font-size: 20px')

  // Object.values() => this will accept the object as a argument and return the array of object values

  var values =  Object.values(employee);
  console.log(values);


   // ##############################  Object.entries() #######################
   // this method will be give the array of array where the nested array will have two values first index is key and second index is value
    //  [[key , value], [key, value]]

var entries  = Object.entries(employee); 
console.log('entries' , entries)

entries.forEach((elem , index)=>{
    console.log('key=>' , elem[0] , 'value=>' , elem[1])
})


//##################### How to add the keys and values into the  object  or  Updating the objects ##################### 


var emp = {

}
emp.name = 'Vishal Sharma';
// appending the dynamic key 
var key  ='age';
 emp[key] = 26; //  emp['age']= 26
 emp['Bank Balance'] = 1000;
 console.log('Before:',emp)


 //##################### How to  delete the key of object ##################### 

 delete emp.name;

 console.log('After:',emp)

 delete emp.age;

 console.log('After age delete:',emp)

 delete emp["Bank Balance"];

 console.log('After bank balance  delete:',emp)


// ############################### for......in #############################


var employee = {
    name: 'Vishal Sharma',
    orgName: 'Newton School',
    address: 'Kanpur',
    email:'785vishal443@gmail.com',
    'Bank Balance': 100,
 }

 employee['name'] // 'Vishal Sharma'

var array =   [ 1,2,3,4,5]; 

// for...of   // gives the value can apply in array
// for ..in // gives  the index can apply in arary and object
// for(let i=0;i<n;i++)
// forEach()



for(let index in array) {
    console.log(index) //  0,1,2,3,4; array[0] , array[1] array[2] array[3] array[4]
}

 for(let key in employee) {
    console.log(key , employee[key]) //  employee['name'] employee['orgName'] employee['address'] so on....
 }

 // In javascript almost everything is object
 // All except primitives datatypes are object
 // In Javascript functions are also object
 // Arrays are Object
 // Objects are Objects
 // Number , String , Boolean can be object if created with new Keyword  ex:  new Number() , new String() , new Boolean()




function example() {
    console.log('hey')
}
console.log('func example=>', typeof example) //  function

const array2 = [1,2,3];

console.log('arra2=> ',typeof array2) //  object

const num = new Number(1)
console.log('num=>', typeof num) //  object
const s = new String('Hey') 
console.log('string=>s ',typeof s) //  object
const b = new Boolean(true)
console.log('boolean b=>' ,typeof b) //  object


const object1  = {

}

object1.name = 'Hello';

function exampleObject() {
        const country = 'India';
        console.log('I love India ')
}


exampleObject.city = 'Kanpur'

console.log(exampleObject.city)

delete exampleObject['city'];

console.log('after', exampleObject.city) // 


exampleObject.cityNames = ['Kanpur', 'Lucknow', 'Bangalore', 'Gurgaon', 'Rishikesh', 'Gujrat', 'Kolkata', 'Manali']


console.log(exampleObject)

console.log(exampleObject.cityNames)

const keysData = Object.keys(exampleObject);
console.log(keysData)


const arrayIndex = Object.keys([1,2,3]); //  [1,2,3] =>0, 1,2 => ['0', '1' , '2']

console.log(arrayIndex)


//       ################### Spread Operator in Object ################


const a = [1,2,3]
const bb = [...a];

var employee = {
    name: 'Vishal Sharma',
    orgName: 'Newton School',
    address: 'Kanpur',
    email:'785vishal443@gmail.com',
    'Bank Balance': 100,
 }

 var spreadExample  = {...employee}; // deep copy of object  , if object is not nested
 //In this case for single level of object will be deep copy , else if you try to update the nested level  , 
 //this will change original obj as well.

 spreadExample.city= 'Kanpur'
 console.log(spreadExample ,  'employee', employee);


 //  ################## Nested Object Example In Javascript ##############

 var student = {
    name: "Vishal",
    address: {
        country:{
            state:{
                city: {
                    district: {
                        name: 'Kanpur'
                    }
                }
            }
        }
    }
 }


 var employee = {
    name: 'XYZ',
    address: {
        value: 'AAO Kabhi haveli par.......'
    }
 }
 employee.address.value= 'Thakur ki haveli....'
 console.log(employee)



const updatedEmployye = {
    ...employee,
    gender: 'Male'
}

console.log(updatedEmployye);



var student = {
        name: 'XYZ',
        rollNo:'11607932',
        college: 'Newton',
        adress: {
            country: {
                city: {
                    name: 'chirkoot'
                }
            }
        }
}


var cseStudent= { branch: 'CSE', relationship: 'Bio'};


const mergeoBject = {...student ,  ...cseStudent};

console.log(mergeoBject);





const obj1 = {
    a: {
        b:{
            c: {
                d: {
                    e:{
                        value:3
                    }
                }
            }
        }
    }
}

const obj2 = {...obj1};

obj2.a.b.c.d.e.value = 'dddd'

obj2.z = '20';

console.log(obj1 , obj2)

