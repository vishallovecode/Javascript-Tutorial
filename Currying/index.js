console.log('Hey Mujhe Cuurry Sikhan ha bnana nahi  , Javscript me likhna');

// closures 

function exampleClosure (a) {
    let outer = 'Cool';
    return function inner (b) {
      let killer = 'Digvijay';
      console.log('inner ' ,killer)
     return  function innerMost (c) {
        let pinewala = 'Lohit';
        console.log('innerMost ' ,pinewala)

       return function sabseBhitar(d){
          let fhekneWla = 'Abhishek'; 
          console.log('sabseBhitar ' ,fhekneWla)
          const sum  = a+b+c+d;
          console.log(sum)
        }
      }
    }
}


// const  innerFunc = exampleClosure(20);
// const innerMost = innerFunc(30)
// const sabseBhitarFunc = innerMost(60)
// sabseBhitarFunc(70)
// sabseBhitarFunc(100)



const result  = exampleClosure(20)(30)(60)(100);




