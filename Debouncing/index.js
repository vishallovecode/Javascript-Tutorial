async function handleChange (event) {
   const data  = await fetch(`http://dummyjson.com/users/search?q=${event?.target?.value}`)
   const resJson = await data.json();
   console.log(resJson)
}


// Debouncing is techinique to optimize the website performance by  contrlling the time when function 
// execution will happen  

// debouncing function is higher order function which accepts the one function and delay 
// and it will return the new function or execute it
// this debounced function is executed after a certain period of time 


function debounce(func , delay) {
  let timer = null;
  return  (...args)=>{
    if(timer) clearTimeout(timer)
     timer =  setTimeout(()=>{
        func.apply(undefined , args ) // 
      } , delay)
  }
}


[appl]


const debounceSearch =  debounce(handleChange , 500)