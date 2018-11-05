const Airplane = require('./1-airplane.js');

function displayAirplane() {
  console.log(Airplane.myAirplane);
}

displayAirplane();

// we can use the require() function to import an exported module
//to import the module, we create a variable equal to the require() function with the filepath as the argument
//this allows for us to call certain propties from the imported modules
