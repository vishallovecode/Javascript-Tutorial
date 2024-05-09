// // ecma script 2015

// // Like java we can create the classes in Javascript also.


// // Jvascript is functional Programming
// //



// // function A(name) {

// //     this.name =  name;
// // }

// class A {
//   constructor(name) {
// this.message = 'Hey This is message'
//   }
//   print(data) {
//     console.log(data)
//   }
//   printMessage() {
//     this.print(this.message)
//   }
// }

// console.log(typeof A)
// console.log(A.constructor === Function)
// const a =  new A('Hey');
// a.printMessage()

// class B extends A {
//     print() {
//       console.log('Hye')
//     }

// }
// const b = new B();
//   console.log(b.__proto__)
//   console.log(B.prototype)


// // console.log(b.nikalJaye());// error


// // b = {
// //   print: function(), 
// //   printMessage: function, 

// // }





// // class D extends String , Number {

// // // }

// // const d =  new D();
// // console.log(d.constructor)

// // multilevel minheritnace is possible 
// // in js one instance cannot inherited from multiple object
// // so multiple inheritance are not allowed

// // Private properties and method



// class Human {
//    message = 'Hello Cool ha kya' // here message is property right now this is public
//    _mobileNumber = '9915378881'

//    #privateaccountNumber = '5213456789865'; //  Private properties

//    get accountNumber() {
//       return this.#privateaccountNumber;
//    }

//    set mobileNumber(value) {
//       if(isNaN(value)) {
//         this._mobileNumber = '9915378881'
//       } else {
//         this._mobileNumber = value
//       }
//    }
//    #printData() {
//     console.log('miss me')
//    }

//    get mobileNumber () {
//       return this._mobileNumber
//    }

// }

// const hu = new Human();
// console.log(hu.message)

// console.log(hu.mobileNumber)



// console.log(hu['privateaccountNumber']) // undefined\
// console.log(hu['#privateaccountNumber']) // undefined
// console.log(hu.accountNumber)

// // console.log(hu.#privateaccountNumber) // syntax error

// // console.log(hu.#printData())  // Property '#printData' is not accessible outside class 'Human' because it has a private identifier




class SmajaJao  {
  __phoneNumber = 0;
  get phoneNumber() {
    return this.__phoneNumber;
  }
  set phoneNumber(value) {
    // validation
    console.log('chakar')
    this.__phoneNumber =value
  }
}

const atmaa = new SmajaJao();

atmaa.phoneNumber = '9915378881'


console.log(atmaa.phoneNumber)
