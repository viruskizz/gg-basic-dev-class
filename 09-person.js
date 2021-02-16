class Person {
  name;
  age;
  hairColor;
  gender;

  // การสร้าง Object ขึ้นมา
  // กำหนดค่าเริ่มต้น

  constructor(name, age, hairColor, gender) {
    this.name = name;
    this.age = age;
    this.hairColor = hairColor;
    this.gender = gender;
  }

  walk() {
    console.log(`${this.name} is walking`)
  }

  speak(word) {
    console.log(`${this.name} said "${word}"`)
  }
}

module.exports = Person;