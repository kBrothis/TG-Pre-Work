import Airplane from './airplane';

function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(function(element){
  console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();

// In ES6, we can use import to import modules.
//import statements will be typed out as: import "name of variable to store default export in", from "name of module to load"
