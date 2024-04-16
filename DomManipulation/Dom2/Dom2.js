
// accessing the dom elements
// we have different ways to do so.

// How to access the element of Dom

// accessing the dom element using getElementById

 function main() {
    // it will written the single node
    const heading = document.getElementById('heading');
    heading.innerText = 'lets Rock'
    // accessing the elements using getElementsByClassName

    const elements =  document.getElementsByClassName('check'); //
    console.log(elements)
    let pos= 0;
    for(let node of elements) {
        pos++;
        if(pos%2==0) {
            node.innerText = 'Even'
            node.style.border = "2px solid black"
        } else {
            node.innerText = 'Odd'
        }
       
    }

    const element1 = document.getElementById('check');
    // console.log(element1)



    // Finding the elements using Tag Name

    const elem =  document.getElementsByTagName('h4')
    const elem1 =  document.getElementsByTagName('span')

    console.log('Tag name h4=>::' ,elem)
    console.log('Tag name span=>::' ,elem1)

    //querySelector this will return the single object , which match given conditon
    const q1 = document.querySelector('.check')
    const q2 = document.querySelector('#heading')
    const q3 = document.querySelector('h4')
    console.log(q1 , q2 , q3)

    // using css selectors
    // we can use querySelectorAll

    const q11 = document.querySelectorAll('.check')
    const q12 = document.querySelectorAll('#heading')
    const q13 = document.querySelectorAll('h4')
    console.log(q11 , q12 , q13)

 }


 



