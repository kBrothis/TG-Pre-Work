// Write your code below


let bobsFollowers = ['Tom', 'Michael', 'Anna', 'Sam'];

let tinasFollowers = ['Sarah', 'Michael', 'Anna'];

let mutualFollowers = [];

for(var i =0; i<bobsFollowers.length; i++){
  for(var j = 0; j<tinasFollowers.length; j++){
    if(bobsFollowers[i]===tinasFollowers[j]){
      mutualFollowers.push(tinasFollowers[j]);
    }
  }
}


// Loops inside other loops are known as nested loops.
// nested loops are good for comparing the elements in two arrays.
// the inner loop will run completely for each round in the outer loop
