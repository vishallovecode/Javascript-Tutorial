


try {
    //here you can write code if error occurred pointer will goto catch block
    console.log(a) // a is not defined
}


catch(error) {
        console.log('i am handling the error');
        console.log('I will execute if only there is error in my try')
} finally{
    console.log('I am finally  I will run whether there is error or not')
}



try {
    //here you can write code if error occurred pointer will goto catch block
    console.log('Hey') // a is not defined
}


catch(error) {
        console.log('i am handling the error2');
        console.log('I will execute if only there is error in my try2')
} finally{
    console.log('I am finally  I will run whether there is error or not2')
}


try {
    // throw is keyword which is used to throw the error
    throw new Error('Hey Me to error bhej rha hun');
} catch(err) {
    console.error(err) //
    console.error(err.message) //
}

// More Practise: Try and Catch

