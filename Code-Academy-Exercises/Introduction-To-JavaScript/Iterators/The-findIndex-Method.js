const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];


const foundAnimal = animals.findIndex( animal => { return animal === 'elephant';});

const startsWithS = animals.findIndex( animal =>{
  return animal[0] === 's';
});

// The .findIndex method can find the location of an element in an array
// the find index method will return the first element that evalutes to true in the callback function
