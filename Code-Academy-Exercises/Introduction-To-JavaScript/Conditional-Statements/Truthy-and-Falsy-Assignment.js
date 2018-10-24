let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);

// We can use the || or statement to assign a value to a variable similar to an if statement. Since the || operator checks the left side first, it will determine if the left side is a truthy and if not, it'll set the variable to the value on the right.
