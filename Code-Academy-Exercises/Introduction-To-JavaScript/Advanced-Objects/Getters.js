const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel (){
    if(typeof this._energyLevel === 'number'){
      return `My current energy level is ${this._energyLevel}`
    }else{
      return 'System malfunction: cannot retrieve energy level';
    }
  }
};

console.log(robot.energyLevel);




// getters can return internal properties of an object. We can use a function with the getter method to perform actions with the data as well.
