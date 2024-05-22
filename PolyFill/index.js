

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
  context.func =  this;
  context.func(...args)
}

// rest operator 
// spread operator 
// map filter , reduce
// race , all , allsettled , any
// promise 