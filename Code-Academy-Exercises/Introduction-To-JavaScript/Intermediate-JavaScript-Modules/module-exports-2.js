const Airplane = {};

module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function() {
    return this.myAirplane;
  }
};

// ---------------------------------------------------------------//
const Airplane = require('./2-airplane.js');
console.log(Airplane.displayAirplane());

// we can wrap any collection of data and functions into an object.
// we can then export the object using the module.exports into another file
//from that file, we can call the functions or properties from the module
