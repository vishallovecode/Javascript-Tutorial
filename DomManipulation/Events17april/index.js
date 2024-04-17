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