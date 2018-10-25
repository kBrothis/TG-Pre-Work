const robotFactory = (model, mobile) =>{
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

const tinCan = robotFactory('P-500', true)

tinCan.beep();

// factory functions are like skeletons of an object that can be reused to make multiple Objects
// factory functions take in parametors and assign them to properties in the object
