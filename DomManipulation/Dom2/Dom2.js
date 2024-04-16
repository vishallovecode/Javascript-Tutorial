
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
    for(let node of elements) {
        node.style.border = "2px solid black"
    }


    const element1 = document.getElementById('check');
    // console.log(element1)
 }


 // Accessing the dom element using getElementsByClassName

