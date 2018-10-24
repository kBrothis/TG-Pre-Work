
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(concept);

function removeElement(newArr){
  newArr.pop();
}

removeElement(concept);

console.log(concept);
// If an array is pushed into a function and it's mutated by the functhen then the change takes place outside the function as well.
