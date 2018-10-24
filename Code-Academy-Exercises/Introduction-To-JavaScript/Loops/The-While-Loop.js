const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below


let currentCard;
while(currentCard != 'spade' ){
	currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

// A variable has to be declared before a while loop
// The while loop uses the variable as it's stopping condition;
// While the condition is true, the loop will continue
// The variable increment is in the while loop code block
