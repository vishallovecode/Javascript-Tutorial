async function onSubmit (event) {
  const payload = {};
  event.preventDefault()
  payload.username =  document.getElementById('userNameId')?.value;
  payload.password =  document.getElementById('passwordId')?.value;
  const data  = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })

  const resData =  await data.json();
  localStorage.setItem('userDetails' ,JSON.stringify(resData) )
  
}