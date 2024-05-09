// ecma script 2015

// Like java we can create the classes in Javascript also.


// Jvascript is functional Programming
//



// function A(name) {

//     this.name =  name;
// }

class A {
  constructor(name) {
this.message = 'Hey This is message'
  }
  print(data) {
    console.log(data)
  }
  printMessage() {
    this.print(this.message)
  }
}

console.log(typeof A)
console.log(A.constructor === Function)
const a =  new A('Hey');
a.printMessage()

class B extends A {
    print() {
      console.log('Hye')
    }

}
const b = new B();
  console.log(b.__proto__)
  console.log(B.prototype)


// console.log(b.nikalJaye());// error


// b = {
//   print: function(), 
//   printMessage: function, 

// }





// class D extends String , Number {

// }

const d =  new D();
console.log(d.constructor)

// multilevel minheritnace is possible 
// in js one instance cannot inherited from multiple object
// so multiple inheritance are not allowed

