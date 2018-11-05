var pasta = "Spaghetti"; // ES5 syntax

const meat = "Pancetta"; // ES6 syntax

let sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
const carbonara = `You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`;

// we have to call the "build" script from the command line to transpile the code.
//the build script will transpile the files inside the src folder into the main file in a new folder named lib (whatever we used in the script)
