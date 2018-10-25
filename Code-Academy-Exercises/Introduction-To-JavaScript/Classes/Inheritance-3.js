
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications){
    super(name);
    this._certifications = certifications;
  }

}
const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics'])

// extends makes it so we can use the methods of the parent class in the child class
// super will call the constructor of the parent class
