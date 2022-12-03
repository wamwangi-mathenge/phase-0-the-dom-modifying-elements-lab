// Write your code here!
// Make sure you remove the <main> with id 'main': expected <main id="main"></main> to not exist
main.remove();

// has a 'newHeader' variable that points to node 'h1#victory'"
const newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
newHeader.innerHTML = "Brian, is the champion!"