let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below

let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil';
}

let remotelyDisable = obj =>{
  obj.disabled = true;
}

greenEnergy(spaceship);

console.log(spaceship);

remotelyDisable(spaceship);

console.log(spaceship);

// When we pass objects through functions as arguments, the functions can permanently change the object even if the object is a const variable.
