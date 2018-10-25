function robotFactory(model, mobile){
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)

// we can use a destructuring technique called property value shorthand to simplify the factory Functions
// when using property value shorthand, we don't have to assign property assignments as the properties will take whatever's in the parameters.
