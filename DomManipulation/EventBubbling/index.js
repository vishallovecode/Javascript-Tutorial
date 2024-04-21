


// Event bubbling => bottom => top (document) (default)
// Event bubbling => Whenever click or any events happen into the child element the events bubbles up towards its parent till the top most parent node document it called event bubbling.

// Event bubbles use case
// how can we stop this  

// Event capturing => top => bottom (we need to tell browser i want capturing)

function grandparent (e) {
        console.log('======grandparent========')
        console.log('e.target=>', e.target)
        console.log('e.currentTarget=>',e.currentTarget)
}


function grandchild (e) {
    console.log('======grandchild========')
    console.log('e.target=>', e.target)
    console.log('e.currentTarget=>',e.currentTarget)
    e.stopPropagation(); // it will stop event bubbling from here it will not go to its parent
}


function child (e) {
    console.log('======child========')
    console.log('e.target=>', e.target)
    console.log('e.currentTarget=>',e.currentTarget)
}


const grandParentNode = document.getElementById('grandparent'); // this grand parent element

grandParentNode.addEventListener('click',grandparent, true ) // capturing

const grandchildNode1 = document.getElementById('smallgrandchild');

grandchildNode1.addEventListener('click',child, true ) // capturing

const grandchildNode = document.getElementById('smallgrandchild2');

grandchildNode.addEventListener('click',grandchild, true ) // capturing



