const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo () {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
  }
};

robot.provideInfo();

console.log(robot.provideInfo());

// we don't have access to other properties of the object that we're in.
// we have to use the this keyword in front of object's property in order to call the property within the same objects
