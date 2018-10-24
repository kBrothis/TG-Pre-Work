const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below

const smallNumbers = randomNumbers.filter(function(number){
  return number<250;
});
console.log(smallNumbers);

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below

const longFavoriteWords = favoriteWords.filter(word =>{
  return word.length > 7;
});


// The filter method returns a new array after filtering out certain elements from the original array
