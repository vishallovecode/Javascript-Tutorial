// console.log('Hey We are learning , Construtor Function here');

// // Constructor Function can be created only in normal function not in arrow functions
// // why ?? because normal function have it own context (this)
// // best practise to create constructor function always start with capital letter

// const number =  new Number() // Number is constructor function 


// var employee = {
//     salary: 3000000,
//     taxRegime: 'New',
//     name: 'XYZ',
//     adress: 'XYZ PRS',
//     donation:  500000,
//     investmnent: 50000,
//     hra: 300000
// }

// // const emp1 = {...employee};


// function Employee () {
//     // here this is empty object we are setting the key value pair here  ,
//     // constructor function return this by default
//   this.firstName = 'Vishal',
//   this.lastName= 'Sharma';
//   this.salary = 200000;
//   this.adress = 'Azad Nagar kanpur'
// }
// const empl  = new Employee();
// const empl1  = new Employee();
// const empl2  = new Employee();
// const empl3  = new Employee();

// empl3.adress ='Delhi Gurgaon'
// console.log(empl , empl1 ,empl2 , empl3);;



// // Constructor  function are exactly same as the normal functions  but 
// // they some rules 

// // They should start with the capital letter
// // At the time of function call they should call using new keyword


// // Whenever you call the constrcutor function  , first empty object will be initialzed to the this 

// function Person (name , lastName , adress , gender) {
//     //  this = {} Done by js
//     this.firstName = name;
//     this.lastName = lastName
//     this.adress =  adress;
//     this.gender = gender;
//     // Return will be by default this ?? 
// }





// const per = Person('1' ,'2','3','4');
// const per1 = Person('11' ,'2','3','4')


// Return  of constructor function 

// Constructor Function always return the this 
// if we return the object then constructor function return object
// If we try to return any value apart from the Object(function , array  , object) this  will return the this only


function Student () {
    // return  'Hey'
    // this = {}
    console.log('this' , this) //  {name: 'Raj'}
     this.name = 'Raj'
    return this;
}


// console.log(Student())

const st = new Student();
console.log(st) //  {}

function BIO () {
    console.log(new.target)
  if(new.target) {
    // constructor function call
  } else {
    // normal function call
  }
}


// const b = new BIO();
const a = BIO()


// JSON.stringify()


const bb = {
    a:{
        b:{
            c:{
                d:{
                    e:{
                        f:{
                           value: 2
                        }
                    }
                }
            }
        }
    }
}

const bb2 = {
    a:{
        b:{
            c:{
                d:{
                    e:{
                        f:{
                          value:   2
                        }
                    }
                }
            }
        }
    }
}

// converting the object into string we use JSON.stringify()
console.log(JSON.stringify({}))
console.log(JSON.stringify(bb))

console.log(JSON.stringify(bb) == JSON.stringify(bb2))

