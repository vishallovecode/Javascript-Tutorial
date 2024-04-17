function clickMe1 () {
  alert('Hey I am just clicked by you')
}


function clickme2 () {
    const div =  document.getElementById('clickme1');
    div.style.display = 'none'
}

function logger () {
    console.log('Hi Hi You just did it.')
}

// Circle 

function createBigCircle () {
    const divNode =  document.createElement('div'); // creating node 
    divNode.id='bigCircle'
    divNode.classList.add('circle'); // this is how you can add classname in dynamic css
    divNode.classList.add('big');
    document.body.appendChild(divNode) // here we have added divNode inside the body
}


function createMediumCircle () {
    const divNode =  document.createElement('div'); // creating node 
    divNode.id='mediumCircle'
    divNode.classList.add('circle'); // this is how you can add classname in dynamic css
    divNode.classList.add('medium');
    const bigCircle = document.getElementById('bigCircle');
    bigCircle.appendChild(divNode)
}

function createSmallCircle () {
    const divNode =  document.createElement('div'); // creating node 
    divNode.classList.add('circle'); // this is how you can add classname in dynamic css
    divNode.classList.add('small');
    divNode.textContent = 'Center';
    divNode.classList.add('text');
    const medCircle = document.getElementById('mediumCircle');
    medCircle.appendChild(divNode)

}


// contextmenu

// function disableRightClick (event) {
//     event.preventDefault();
//     console.log('Hye')
// }

// document.body.addEventListener("contextmenu", (e) => {e.preventDefault()});


function  changeBg() {
    document.body.style.background ='red'

}


function changeBg1 () {
    document.body.style.background ='white'
}


// document.body.addEventListener('click', ()=>{
//     console.log('body is clicked')
// })


// document.body.addEventListener('mouseover', ()=>{
//     console.log('body is hover')
// })




const button  = document.getElementById('submit');

button.addEventListener('click' , ()=>{
    console.log('Button is clicked')
})


// How we have added events ??  one directly attaching event into html elements
// One we can use addEventListener method

// onmousehover
// onmouseleave
// onmousemove
// onmouseout
// onmouseup
// keyword => keydown , keyup => input