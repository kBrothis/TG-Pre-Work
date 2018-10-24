const plantNeedsWater = function(day){
  if(day === 'Wednesday'){
    return true;
  }else{
    return false;
  }
}

console.log(plantNeedsWater('Tuesday'));

// Function expressions define functions. Functions with no names are called anonymous functions.
// Function expressions are usually stored in a variable so that we can refer to it later.
