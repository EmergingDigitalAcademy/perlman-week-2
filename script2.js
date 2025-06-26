/* Intro to arrays and loops */
console.log(`JS File Loaded`);

// Create an empty array using square brackets
// const colors = [];
const colors = ['blue', 'green'];
console.log(`We currently have ${colors.length} colors!`);

// array methods are built in helper functions
// length - tells us how many items are in the array
// push() - adds an item to the end
// unshift() - adds an item to beginning
// pop() - removes and returns an item at the end
// shift() - removes and returns an item at the beginning
// slice() - removes a number of items at a given position
// Other helpers that can be useful:
//  - find() - finds a specific item
//  - indexOf() - returns the index (location) of a specific item
//  - filter() - returns a NEW array with only items that match the criteria
//  - map() - returns a NEW array with a function called on every item in the array
//  - reduce() - returns one new datatype that is the result of running function on the whole array
//      example: reduce an array of numbers to the sum of all numbers
//  - some() - returns true if the array has a single item that matches the condition

// add a few colors to our array
console.log(`... adding a few more colors real quick`);
colors.push('red');
colors.push('yellow');
colors.push('violet');
console.log(`We now have ${colors.length} colors!`);

// Let's loop over each color and display each color as a string
// first part: set `i` to 0 to start the loop
// second part: loop as long as i is less than the length of the array
// third part: after every iteration, add 1 to i
// result: i will be 0, then 1, 2, 3, 4... and loop will exit before i can be 5
// (assuming colors.length is 5)
console.log(`Colors in the array:`)
for (let i=0; i < colors.length; i = i + 1) {
    console.log(`  -colors[${i}]: ${colors[i]}`)
}

// for-of loop is just a fancy for loop that does not have
// an index - it just gives each item at colors[i]
console.log(`Colors in the array (for-of loop)`);
for (let color of colors) {
    // const color = colors[i] -- except i is hidden from us and `color` is created automatically
    console.log(`  - ${color}`)
}


// BONUS TIME - how do we get stuff onto the webpage??
// Answer: The `Document API` which can be used to read and write
// to the webpage (aka the Document Object Model - or DOM)
function buildList() {
    console.log(`Building the list of colors...`);
    const myList = document.getElementById('my-list'); // gets my ul item
    // myList.innerHTML = ''; // Empty out the UL just in case there's already colors there
    for (let color of colors) { // loops over every color in the array, puts the color into local `color` variable
        // color is just colors[i]
        myList.innerHTML += `<li>${color}</li>`; // adds a list item for each color
    }
}
buildList(); // call the build list function 

function addColor() {
    const newColor = prompt("What color would you like to add?");
    console.log(`Adding ${newColor}`);
    // Add the new color to the colors array
    // Call the function to build the array on the page
    colors.push(newColor);
    buildList();
}