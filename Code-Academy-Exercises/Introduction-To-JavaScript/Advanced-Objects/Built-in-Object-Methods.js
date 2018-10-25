const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:

const robotEntries = Object.entries(robot);

console.log(robotEntries);

// Declare newRobot below this line:

const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);
console.log(newRobot);

// There are many more built in methods for objects that can be found on the MDN page.
//Object.Keys will push the keys of the object into an array
// Object.entries will push the key value pair into an array
// Object.assign will add more properties to the object
