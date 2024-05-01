// function are object in javascript



 // function are subtype of object

// Every javascript function   have three properties call bind and apply which is attached as a key,
// and use for explicit binding of "this"
// 

function printData(param1) {
        console.log(this , param1)
}

printData.call(arg1 , arg2, arg3 , arg4)// arg1 => this inside body , arg2=> param1  , arg3 => param2 so on
printData.call({} , '123') 
printData.call({id:123})  // in call first argument is this and context of the 
// function or "this" keyword which we want to bind with function body