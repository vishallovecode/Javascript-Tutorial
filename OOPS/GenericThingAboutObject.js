// key and value pair ?? 


var object  = {
    a: 45677,
    b:234
}
// Object are more flexible and powerful  , it does not give key and value pair   it have three more special 
// properties which is hidden  

// writable  //  default behaviour  true 
// enumerable // default   true 
// configurable //  default  true


const descriptor = Object.getOwnPropertyDescriptors(object);
console.log(descriptor)

const descriptor2 = Object.getOwnPropertyDescriptor(object , 'b');
console.log(descriptor2)

// you want to change the three values

var object  = {
    a: 45677,
    b:234
}

Object.defineProperty(object ,  'a', {
    enumerable: false,
    writable: false
})

object.a ='235' //  not writable 
console.log(object) // {a: 45677 , b:  234}
 
console.log('Last=>' ,Object.keys(object))



// Configurable 


var employee = {
    name: 'Raj Dutta',
    lastName: 'Patta',
    taste: 'Khatta',
    city: 'Kolkata',
    behaviour: 'Meetha'
}


Object.defineProperty(employee , 'behaviour', {
    configurable: false // now behaviour is non-configurable
})


Object.defineProperty(employee , 'behaviour', {
    writable: false  
})


Object.defineProperty(employee , 'behaviour', {
    enumerable: false //  here this property behavioru cannot be configure  because we have set the   configurable false
})


// Note  => We can change writable : true => false for a non-configurable property

delete employee['behaviour'];
employee.behaviour = 'Natkhat';
console.log()
console.log(Object.keys(employee))

