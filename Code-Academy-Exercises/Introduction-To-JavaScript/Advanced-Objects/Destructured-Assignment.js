const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

const {functionality} = robot;

functionality.beep();

// We can simply our code even more by using th destructured assignment to assign variables to object properties. We do this by declaring a new variable that extracts the property from the object. The variable name would be the same as the property name incased in {};
