

// 

// const data = {
//   name: 'Hello',
//   printName: function () {
//     console.log(this.name)
//   }
// }


// const bindFunc = data.printName.bind({name: 'Raj'})
// bindFunc() // Raj
 

// Polyfill for bind
Function.prototype.mybind = function(obj , ...args) {
    const func =  this;
    return function (...arg2) {
      func.apply(obj , [...args , ...arg2])
    }
}

function getExample(...args) {
    console.log(this.name , args)
}

const func = getExample.mybind({name: 'Hurrah'} , 1,2,3,4,5)
func(6,7,8,9)



// folyfill for call ?? 

Function.prototype.mycall = function(context , ...args) {
  context.func =  this; // args coming as rest opeartor and it is in array
  context.func(...args)
}

// rest operator 
// spread operator 
// map filter , reduce
// race , all , allsettled , any
// promise 

function getRaja() {
  console.log(this.myname)
}

getRaja.call({myname: 'Raja hu me'})


const context = {
  myname: 'Raja hu me',
  func: function () {
    console.log(this.myname) //  this?? => context
  }
}

context.func()


Function.prototype.myapply = function(context , args) {
  // args is already in array 
  context.func =  this;
  context.func(...args) // here we are spreading array
}
