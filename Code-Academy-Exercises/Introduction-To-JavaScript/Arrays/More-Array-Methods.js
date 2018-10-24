
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();

//console.log(groceryList);

groceryList.unshift('popcorn');
//console.log(groceryList);



console.log(groceryList.slice(1,4));

console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');

console.log(pastaIndex);

// There are many array methods found on the MDN array documentation. Using the built-in Methods make it easier to do tasks in Javascript.
// the shift method removes the first item from the array.
// The unshift method adds an element to the beginning of an array
// Slice will take out part of the array Elements
// THe indexOf method returns the element's index in the array.
