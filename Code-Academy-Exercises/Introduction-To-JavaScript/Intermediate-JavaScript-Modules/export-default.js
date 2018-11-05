let Airplane = {};

Airplane.availableAirplanes = [
{
  name: 'AeroJet',
  fuelCapacity: 800
 },
 {
   name: 'SkyJet',
  fuelCapacity: 500
 }
];

export default Airplane;

// exporting modules are broken down into two techniques
// the export default uses the Javascript export statement
// we use export default in place of module.exports in ES6
