

// We have discussed the higher order functions 
// map , filter , etc.... Javascript

// setTimeout is  web api provided by the browser , and it is behave like a higher order function 

// it takes two parameter first is function  and second is delay

// function callAfterDelay() {
//     console.log('I am caliing late')
// }
// setTimeout(callAfterDelay , 5000 ) //  it means setTimeout will call the function after 1 second

console.log('Hey I am calling')

// async programming



function callAfterDelay() {
    console.log('I am caliing late')
}

// for (let i=0;i<5;i++) {
//     setTimeout(()=>{
//         console.log(i)
//     } , 1000)
// }


// for (var i=0;i<5;i++) {
//     setTimeout(()=>{
//         console.log(i)
//     } , 1000)
// }







 



function call1 (index) {
        console.log('call1' , index)
}
function call2 (index) {
    console.log('call2' , index)
}

function call3 (index) {
    console.log('call3' , index)
}
function call4 (index) {
    console.log('call4' , index)
}

for(let  i = 0 ;i<5;i++) {
        setTimeout(()=>{
            eval(`call${i+1}(i)`)
        } , 1000)
}


console.log('Hey Just relax...')
console.log('Hey Just relax...')
console.log('Hey Just relax...')
console.log('Hey Just relax...')
console.log('Hey Just relax...')


console.log('Hey Just relax...')
console.log('Hey Just relax...')
console.log('Hey Just relax...')
console.log('Hey Just relax...')
console.log('Hey Just relax...')

console.log('Hey Just relax...')
console.log('Hey Just relax...')
console.log('Hey Just relax...')
console.log('Hey Just relax...')
console.log('Hey Just relax...')

console.log('Hey Just relax...')
console.log('Hey Just relax...')
console.log('Hey Just relax...')
console.log('Hey Just relax...')
console.log('Hey Just relax...')


console.log('Hey Just relax...')
console.log('Hey Just relax...')
console.log('Hey Just relax...')
console.log('Hey Just relax...')
console.log('Hey Just relax...')

console.log('Hey Just relax...')
console.log('Hey Just relax...')
console.log('Hey Just relax...')
console.log('Hey Just relax...')
console.log('Hey Just relax...')

console.log('Hey Just relax...')
console.log('Hey Just relax...')
console.log('Hey Just relax...')
console.log('Hey Just relax...')
console.log('Hey Just relax...')



// {
//  var i=0;

//  setTimeout(()=>{
//     call1(i)
//  })
// }
// {
//  var i=1
//  setTimeout(()=>{
//     call2(i)
//  })

// }
// {
//  var i=2
//  setTimeout(()=>{
//     call3(i)
//  })

// }
// {
//  var i=3
//  setTimeout(()=>{
//     call4(i)
//  })
// }

// {
//     var i=4
//     setTimeout(()=>{
//        call4(i)
//     })
//    }


// {i =5}