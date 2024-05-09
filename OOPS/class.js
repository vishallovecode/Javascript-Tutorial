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

}
const b = new B();
  console.log(b.__proto__)
  console.log(B.prototype)





