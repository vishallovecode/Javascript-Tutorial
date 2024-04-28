console.log('Hey We are learning , Construtor Function here');

// Constructor Function can be created only in normal function 
// why ?? because normal function have it own context (this)
// best practise to create constructor function always start with capital letter

const number =  new Number() // Number is constructor function 


var employee = {
    salary: 3000000,
    taxRegime: 'New',
    name: 'XYZ',
    adress: 'XYZ PRS',
    donation:  500000,
    investmnent: 50000,
    hra: 300000
}

// const emp1 = {...employee};


function Employee () {
    // here this is empty object we are setting the key value pair here  ,
    // constructor function return this by default
  this.firstName = 'Vishal',
  this.lastName= 'Sharma';
  this.salary = 200000;
  this.adress = 'Azad Nagar kanpur'
}
const empl  = new Employee();
const empl1  = new Employee();
const empl2  = new Employee();
const empl3  = new Employee();

empl3.adress ='Delhi Gurgaon'
console.log(empl , empl1 ,empl2 , empl3);;




