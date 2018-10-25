const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

robot._energyLevel = 'high';


robot.recharge();


// Javascript doesn't have built ins for privacy for objects.
// Programmers use the _ before a property name to indicate to others that the property should never be altered.
// the properties should not be directly manipulated but they can be reassigned.
