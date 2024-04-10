main();

function main () {
     //createElement
     const divNode =  document.createElement('h2'); // creating the h2 element
     divNode.innerText = 'Creted using createElement method' // putting text b/w the element
     divNode.textContent = 'Using createElement method' 
     document.body.appendChild(divNode); // adding divNode which we have created as child into the body element
     //every node have append and appendChild function
}



function changeColor  () {
    const header = document.getElementById('heading');
    header.style.background = 'red';
    header.style.color= 'Black'
    header.style.borderRadius = '20px'
}

// dom  => document object model 
// When a browser loaded the html page  file in browser it will create Document  Object Model 
// It is like tree of objects structure


// Using dcoument
// You can delete the element from page 
// You can update the element from page
// You can create new element into the page
// You can add events(action) to the page
// You cam remove add and edit css in web page
// You can change the attributes of the element
// You can do all the  crud operations in every attributes of html element


// Document object model is use for dynamically changing the content of web page

// The document object model is a platform or language neutral interface  that allows (any programming language) javacript to dynamicalyy  , add , delete , update ,edit the web page or html element


// Insert element
// delete element
// update element
// add css 
// remove css
// add style remove style
// adding events  (action)


// This javascript file we will use for intearaction with web page 