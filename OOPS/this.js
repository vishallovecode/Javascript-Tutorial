// // "use strict"; 
// // In Javascript this will refers to the object 
// // The this keyword refers to the context  where a piece of code  , such as function body supposed to run

// console.log(this) //  GEC

// function callRajaBabu() {
//     console.log('inside raja babu' ,this)
// }


// callRajaBabu();

// function fatheroffather () {
//     let name = 'baccha yada'
//     function baccha() {
//         console.log('baccah yadav calling' , this)
//     }
//     baccha()
// }

// fatheroffather()




// the value of this will does not depend where it is delcared it depends where the functions or method is invoked


// const student = {
//     firstName: 'Lohit ka babu(male version age 26)',
//     lastName: 'Lohit',
//     getLohitBaby: function() {
//         console.log('Hey i am lohit ka beba...' , this);
//     },
//     getFullName() {
//         console.log('I am fullname' , this);
//     }
// }
// // student.getLohitBaby();
// // student.getFullName();



// //  student.getLohitBaby();

// student.getFullName(); // GEC => THIS  => STUDENT (method invoked)
// const func1 = student.getLohitBaby;
// func1(); // GEC =< THIS => WINDOW (function call )

//Note-> 1  Normal Function (This concepts is only for remebering this value)
// IF FUNCTION CALL THEN THIS  => WINDOW 
// IF METHOD INVOKED THEN "THIS" WILL BE THE VALUE BEFORE DOT 



const employee = {
    firstName: 'Radar ',
    lastName: 'Yuirt',
    salary: 230000,
    getSalary: function() {
      console.log( this.salary) // ?? 
      function call2 () {
        console.log('inside getSalary salary' , this ) // ?? 
      }
      call2();
    },
    getFullName() { 
        console.log(this.firstName +  this.lastName)  // ??  this => employee
        function call1 () {
            console.log('Function inside the getFullName' , this) // ??
        }
        call1() //  this is the function call => this  => window (not strict mode in strict mode it will  be undefined)
    }
}

employee.getFullName();
employee.getSalary();