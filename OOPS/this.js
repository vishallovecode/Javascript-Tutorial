// // // "use strict"; 
// // // In Javascript this will refers to the object 
// // // The this keyword refers to the context  where a piece of code  , 
// //    such as function body supposed to run

// // console.log(this) //  GEC

// // function callRajaBabu() {
// //     console.log('inside raja babu' ,this)
// // }


// // callRajaBabu();

// function fatheroffather () {
//     let name = 'baccha yada'
//     function baccha() {
//         console.log('baccah yadav calling' , this)  // this => window (non strict mode ) 
//     }
//     baccha()
// }

// fatheroffather()




// // the value of this will does not depend where it is delcared it depends where the functions or method is invoked


// // const student = {
// //     firstName: 'Lohit ka babu(male version age 26)',
// //     lastName: 'Lohit',
// //     getLohitBaby: function() {
// //         console.log('Hey i am lohit ka beba...' , this);
// //     },
// //     getFullName() {
// //         console.log('I am fullname' , this);
// //     }
// // }
// // // student.getLohitBaby();
// // // student.getFullName();



// // //  student.getLohitBaby();

// // student.getFullName(); // GEC => THIS  => STUDENT (method invoked)
// // const func1 = student.getLohitBaby;
// // func1(); // GEC =< THIS => WINDOW (function call )

// //Note-> 1  Normal Function (This concepts is only for remebering this value)
// // IF FUNCTION CALL THEN THIS  => WINDOW 
// // IF METHOD INVOKED THEN "THIS" WILL BE THE VALUE BEFORE DOT 



// var employee = {
//     firstName: 'Radar ',
//     lastName: 'Yuirt',
//     salary: 230000,
//     getSalary: function() {
//       console.log( this.salary) // ?? 
//       function call2 () {
//         console.log('inside getSalary salary' , this ) // ?? 
//       }
//       call2();
//     },
//     getFullName() { 
//         console.log(this.firstName +  this.lastName)  // ??  this => employee
//         function call1 () {
//             console.log('Function inside the getFullName' , this) // ??
//         }
//         call1() //  this is the function call => this  => window (not strict mode in strict mode it will  be undefined)
//     }
// }

// employee.getFullName();
// employee.getSalary();



// // "This" value in arrow function will always point to the it parent normal function context (this) if there is 
// // no parent normal function then it point to the window

// const call3 = () => {
// console.log('Arrow' ,this)
// }

// call3()



// var employee = {
//     firstName: 'Radar ',
//     lastName: 'Yuirt',
//     salary: 230000,
//     getSalary: () => {
//       console.log(this) // ?? 
//       const call1  = () => {
//         console.log('Function inside the getSalary' , this) // ??
//     }
//     call1() // 
//     },
//     getFullName() { 
//         console.log(this.firstName +  this.lastName)  // ??  this => window
//         const call1  = () => {
//             console.log('Function inside the getFullName' , this) // ??
//         }
//         call1()  
//     }
// }

// // employee.getSalary();

// employee.getFullName()


// var data =  employee.getFullName;
// data(); //  this  => window

// method invkoked
// function call 
// arrow take parent normal function this ofr window


const students123 = {
    name: "Vishal",
    lastName: "Sharma",
    college: "Newton",
    printCollegeName: () => {
      console.log("0=>", this.college);  
    },
    printName: function () {
      console.log("1==>", this.name, this.lastName);  
      function Func1() {
        console.log("2==>", this.name);  
        function func2() {
          console.log("3==>", this.name);  
          const fun3 = () => {
            console.log("4=>", this.name);  
          };
          fun3();
        }
        func2();
      }
      Func1(); 
    },
  };
  students123.printName();  
  students123.printCollegeName(); 

  // function borrowing  => todo


  // Javascript factory function  => the function which return the object

