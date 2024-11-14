var listItems = document.getElementsByTagName('li');                   // All <li> elements

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2');                        // h2 element
var headingText = heading.firstChild.nodeValue;                    // h2 text
var totalItems = listItems.length;                                 // No. of <li> elements
var newHeading =  headingText + '<span>' + totalItems + '</span>'; // Content


/*  WRITE YOUR CODE BELOW */


// Part1. Hint: Use the listItems object to iterate through the elements of the list

for (var i = 0; i < listItems.length; i++) {
    var itemText = listItems[i].textContent.toLowerCase(); // Get text content of each list item in lowercase
    
    // Check if the item is 'fresh figs', 'kale', or 'honey'
    if (itemText === 'fresh figs' || itemText === 'kale' || itemText === 'honey') {
        listItems[i].className = 'cool'; // Change class name to 'cool' if it matches
    }
}




// Part2. Hint: Use the heading and newHeading to show the number of items in the shopping list

heading.innerHTML = newHeading;



