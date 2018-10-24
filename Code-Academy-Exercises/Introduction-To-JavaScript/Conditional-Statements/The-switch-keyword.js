let athleteFinalPosition = 'first place';
switch(athleteFinalPosition){
  case 'first place':
    console.log('You get the gold medal!');
		break;
  case 'second place':
    console.log('You get the silver medal!');
		break;
  case 'third place':
    console.log('You get the bronze medal!');
		break;
  default:
    console.log('No medal awarded.');
    break;
}

  
// the switch statement is a gret alternative to if statements to make the syntax easier to read.
// The switch statement has a default at the end similar to the "else" in else if statements
// the break keyword has to be used after the block so that it doesn't execute any of the other code blocks.
