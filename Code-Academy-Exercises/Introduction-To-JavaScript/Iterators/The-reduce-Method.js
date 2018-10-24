
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator)
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
},10);

console.log(newSum);

// The reduce method returns one value after iterating through the elements in the array.
//reduce requires a a callback function that has an accumulator and current value
