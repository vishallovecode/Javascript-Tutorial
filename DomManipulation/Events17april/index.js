// function clickMe1 () {
//   alert('Hey I am just clicked by you')
// }


// function clickme2 () {
//     const div =  document.getElementById('clickme1');
//     div.style.display = 'none'
// }

// function logger () {
//     console.log('Hi Hi You just did it.')
// }

// // Circle 

// function createBigCircle () {
//     const divNode =  document.createElement('div'); // creating node 
//     divNode.id='bigCircle'
//     divNode.classList.add('circle'); // this is how you can add classname in dynamic css
//     divNode.classList.add('big');
//     document.body.appendChild(divNode) // here we have added divNode inside the body
// }


// function createMediumCircle () {
//     const divNode =  document.createElement('div'); // creating node 
//     divNode.id='mediumCircle'
//     divNode.classList.add('circle'); // this is how you can add classname in dynamic css
//     divNode.classList.add('medium');
//     const bigCircle = document.getElementById('bigCircle');
//     bigCircle.appendChild(divNode)
// }

// function createSmallCircle () {
//     const divNode =  document.createElement('div'); // creating node 
//     divNode.classList.add('circle'); // this is how you can add classname in dynamic css
//     divNode.classList.add('small');
//     divNode.textContent = 'Center';
//     divNode.classList.add('text');
//     const medCircle = document.getElementById('mediumCircle');
//     medCircle.appendChild(divNode)

// }


// // contextmenu

// // function disableRightClick (event) {
// //     event.preventDefault();
// //     console.log('Hye')
// // }

// // document.body.addEventListener("contextmenu", (e) => {e.preventDefault()});


// function  changeBg() {
//     document.body.style.background ='red'

// }


// function changeBg1 () {
//     document.body.style.background ='white'
// }


// // document.body.addEventListener('click', ()=>{
// //     console.log('body is clicked')
// // })


// // document.body.addEventListener('mouseover', ()=>{
// //     console.log('body is hover')
// // })




// const button  = document.getElementById('submit');

// button.addEventListener('click' , ()=>{
//     console.log('Button is clicked')
// })


// // How we have added events ??  one directly attaching event into html elements
// // One we can use addEventListener method

// // onmousehover
// // onmouseleave
// // onmousemove
// // onmouseout
// // onmouseup
// // keyword => keydown , keyup => input



//  18 th april



// we will discussing input elements events


function handleInputChange (e) {
    // console.log(e)
    // console.log('input box value change' , e.target)
    // console.log(e.target.placeholder)
    // console.log(e.target.tagName)


    // reading value from input

    // console.log(e.target.value)

    const div1 = document.getElementById('div1')
    div1.style.background = e.target.value
}

function handleInputChang2 (e) {
    const div2 = document.getElementById('div2')
    div2.style.background = e.target.value
}



// 
const input3 =  document.getElementById('input3');
// input3 => is one dom node which is the html element with id input3 


// input3.addEventListener('input' , (e)=>{
//     const div3 = document.getElementById('div3')
//     div3.style.background = e.target.value
// })


function handleInputChang3 (e){
    const div3 = document.getElementById('div3')
    div3.style.background = e.target.value
}

input3.addEventListener('input' , handleInputChang3)

// function addEventListener (type , callback) {
//     if(signal === type) {
//         callback(event) //
//     }
// }

// focusing input box

function focused (e) {
    e.target.style.width= '20%';
    e.target.style.borderRadius= '40px'
    e.target.style.border =  "2px solid brown";

}


function focusOut (e) {
    e.target.style =''
}