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



// higher order function
function debounce(func , delay) {
  let timer = null;
  // returning new function
  return  (...args)=>{ 
    // if timer has value then clear the ealier timeout from memory
    if(timer) clearTimeout(timer)
    // setting timeout for new triggered
     timer =  setTimeout(()=>{
      // calling required function when given time is finised  or after delay
        func( ...args )
        // func.apply(undefined , args)
      } , 1000) // this is delay after that function call if there is not input before given time
  }
}
const debounceSearch =  debounce(handleChange , 500)





// depend of action

//  call function after given delay  everytime does not matter with action


// every day i will give you one chocolate


// throttling will take a func and delay as input and retunr modified function , that function 
// called or executed delay (1000ms) after previous function was excuted

function throttling (func , delay) {
  let timer = null;
  return (...args)=>{
    if(!timer) {
      func(...args);
      timer = setTimeout(()=>{
        timer =null;
      } , delay)
    }
  }
}


const throttle = throttling(handleChange , 1000)

