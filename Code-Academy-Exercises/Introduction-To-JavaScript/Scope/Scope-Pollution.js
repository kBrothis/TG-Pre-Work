const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);

// Having too many global variables can cause problems in a program.
// scope pollution is when there are too many global variables that exist or we reuse variables accross different scopes
//it's best practive to not define variables in the global scope
