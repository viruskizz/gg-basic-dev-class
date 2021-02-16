const Person = require('./09-person');

class Student extends Person {
  _job;

  constructor(name, age, hairColor, gender) {
    super();
    this.name = name;
    this.age = age;
    this.hairColor = hairColor;
    this.gender = gender;
    this._job = 'Student'
  }

  /**
   * Overide method
   */
  walk(distance) {
    console.log(`${this.name} passed ${distance} m.`)
  }

  learn(subject) {
    console.log(`${this.name} is learning ${subject}`);
  }
}

module.exports = Student;