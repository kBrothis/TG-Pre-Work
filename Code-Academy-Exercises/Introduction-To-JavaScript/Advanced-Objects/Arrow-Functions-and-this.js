const robot = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();

// We can't use Arrow functions with the this keyword since the this keyword would become a global object which doesn't have a the property we are trying to call.
