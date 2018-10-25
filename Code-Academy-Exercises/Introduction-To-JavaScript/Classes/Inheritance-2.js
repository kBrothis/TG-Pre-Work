class HospitalEmployee {
  constructor(name){
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name(){
    return this._name;
  }

  get remainingVacationDays(){
    return this._remainingVacationDays
  }
  takeVacationDays(daysOff){
    this._remainingVacationDays -= daysOff;
  }
}

// We can compile the properties and methods that are the same from child classes to make a parent class
