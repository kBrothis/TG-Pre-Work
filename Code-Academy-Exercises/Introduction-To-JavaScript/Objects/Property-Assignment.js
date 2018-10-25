let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below


spaceship.color = 'glorious gold';
spaceship['numEngines'] = 3;

delete spaceship['Secret Mission'];

// we can reassign a property value or assign a new key value pair using the dot or bracket notation.
//we can delete properties by using the delete operator;
