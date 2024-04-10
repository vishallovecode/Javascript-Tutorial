

main(); 
function main () {
    //  //createElement
    //  const h2Node =  document.createElement('h2'); // creating the h2 element
    //  h2Node.innerText = 'Creted using createElement method' // putting text b/w the element
    //  h2Node.textContent = 'Using createElement method' 
    //  document.body.appendChild(h2Node); // adding divNode which we have created as child into the body element
    //  //every node have append and appendChild function
    createBox()
}

// calling

function createBox () {
    const divNode  =  document.createElement('div');
    divNode.style.height = '300px'
    divNode.style.width = '400px'
    divNode.style.padding = '40px';
    divNode.style.margin = 'auto'
    divNode.style.backgroundColor = 'Black';
    divNode.style.color = 'white'
    divNode.style.border= '3px solid red'
    divNode.style.textAlign = 'center'
    divNode.style.fontSize = '24px'
    const node =  createSmallBox(); 
    divNode.appendChild(node)
    document.body.appendChild(divNode)
}

function createSmallBox () {
    const divNode  =  document.createElement('div');
    divNode.style.height = '50px'
    divNode.style.width = '200px'
    divNode.style.padding = '20px';
    divNode.style.margin = 'auto'
    divNode.style.backgroundColor = 'green';
    divNode.style.color = 'white'
    divNode.style.border= '3px solid yellow'
    divNode.style.textAlign = 'center'
    divNode.style.fontSize = '24px'
    return divNode;
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