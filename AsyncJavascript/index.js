console.log('Async Programming.....');


// browser apis  => setTimeout and setInterval


// Higher order functions or web apis which will take one or two parameter
// first parameter is function (callback function) and second parameter is delay 
// delay is nothing it is which will tell that after how much delay we want to call the callback function (first parameter)
//the value of delay (second parameter is in ms)
// 1sec = 1/1000
// 1000ms = 1sec
// it will executt the callback  function only once
setTimeout(()=>{
  console.log('I will call after given delay , here delay is 2 sec')
})


// synchronous 
for(let  i=0 ;i<100000;i++){
  console.log(i);
}



// lift...=> 3 sec , `10 minutes
// stairs => 1->2->3->4->5


