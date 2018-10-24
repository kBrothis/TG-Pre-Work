const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some((word) => {
  return word.length < 6;
}));

// Use filter to create a new array

const interestingWords = words.filter(word => {
  return word.length >5;
})

// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every((word) => {
return word.length > 5;
} ));


// There are built in array methods found on the MDN's array iteration methods page. the page goes into details about how the method is used.
// The every method checks ot see if all of the array elements meet the criteria in the callback functions
// The some method checks ot see if some of the array elements meet the criteria in the callback functions
