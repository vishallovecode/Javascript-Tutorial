// function are object in javascript


 // function are subtype of object

// Every javascript function   have three properties call bind and apply which is attached as a key,
// and use for explicit binding of "this"
// 

function printData(param1 ) {
        console.log(this , param1)
}

// printData.call(arg1 , arg2, arg3 , arg4)// arg1 => this inside body , arg2=> param1  , arg3 => param2 so on

printData.call({} , '123') 

printData.call({id:123})

printData.call({name: 'a' ,lstName: 'b'}) // explitiley you are telling that what should be the value of this inside the function


  // in call first argument is this and context of the 
// function or "this" keyword which we want to bind with function body

// function aaa(a,b,c,d,e) {
//     // this => {}
//     // a =2 ,
//     // b=3
//     // c=4
//     // d=5
//     // e = undefined
// }
// aaa.call({},2,3,4,5)


// apply is bahave like a call exactly but there one difference b/w call and apply is  
// in call argument are pass as comma seperated but in the case of apply it is pass as a array 

// function exampleApply(p1,p2,p3,p4 , p5,p6) {
//     console.log('Apply', this , p1,p2,p3,p4  , p5 , p6)
// }

// function exampleCall(p1,p2,p3,p4) {
//     console.log('call', this , p1,p2,p3,p4 )
// }

// exampleApply.apply({id:1234} , [1,2,3,4]);
// exampleCall.call({id:1234} , 1,2,3,4)


// function exampleApply(p1,p2,p3,p4) {
//         console.log('Apply', this , p1,p2,p3,p4)
//     }
    
//     function exampleCall(p1,p2,p3,p4) {
//         console.log('call', this , p1,p2,p3,p4 )
//     }
    
//     exampleApply.apply({id:1234} , [1,2,3,4 ,6,7,8]);
//     exampleCall.call({id:1234} , 1,2,3,4 ,6,7,8)

function exampleApply(p1,p2,p3,p4) {
            console.log('Apply', this , p1,p2,p3,p4)
        }
        
        function exampleCall(p1,p2,p3,p4) {
            console.log('call', this , p1,p2,p3,p4 )
        }
        
        exampleApply.apply({id:1234} , [1]);
        exampleCall.call({id:1234} , 1)