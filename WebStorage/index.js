async function onSubmit (event) {
  const payload = {}; // empty object
  event.preventDefault() // we want to stop default behaviour of form component , like onSubmit reloading page
  payload.username =  document.getElementById('userNameId')?.value;
  payload.password =  document.getElementById('passwordId')?.value;
  // this api is expecting the payload or body in given format
//   {
//     username: 'emilys',
//     password: 'emilyspass',
// }
  const data  = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  const resData =  await data.json();
  // setting the value to localStorage
  localStorage.setItem('userDetails' ,JSON.stringify(resData) )  // 10mb
    // setting the value to session

  sessionStorage.setItem('userDetails' ,JSON.stringify(resData) ) // 5mb
}


function getUserToken () {
  //  getting the value from localStorage
  const userDetails = localStorage.getItem('userDetails');
    //  getting the value from session
  const userDetails1 = sessionStorage.getItem('userDetails');
  const JSon =  JSON.parse(userDetails);
  console.log(JSon.token)
}

function removeItem() {
  sessionStorage.removeItem('userDetails')
  localStorage.removeItem('userDetails')
}

