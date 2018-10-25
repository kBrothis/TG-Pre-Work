let spaceship = {
  passengers: [{ Sally: 23, gender: 'female'}, {Bob : 35, gender: 'male'}],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032
  },
  crew: {
    captain: {
      name: 'Sandra',
      degree: 'Computer Engineering',
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    backup: {
      battery: "Lithium",
      terabytes: 50
    }
  }
};

let capFave = spaceship.crew.captain['favorite foods'][0];

let firstPassenger = spaceship.passengers[0];

// objects can have objects set as a property - These are known as nested Objects
// we can call nested objects by chaining operators to access the nested property
