let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below

let alienShip = {
  retreat() {
    console.log(retreatMessage)
  },
  takeOff(){
  	console.log('Spim... Borp... Glix... Blastoff!')
	}
}

alienShip.retreat();
alienShip.takeOff();

// we can store functions on an object. These are called methods.
// A method is what an object does
//we can omit the : and word function when an object has a method. the key is the method's name
