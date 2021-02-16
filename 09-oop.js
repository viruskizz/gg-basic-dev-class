/**
 * Object Oriented Programming (OOP)
 */

const Student = require('./09-student');
const Person = require('./09-person');

// การใช้งาน
const por = new Person('Por', 30, 'Brown', 'Female');
const big = new Student('Big', 18, 'White', 'Male');
const art = new Student('Art', 20, 'Black', 'Male');

por.speak('Bhra bhra');
big.speak('Hello');
art.speak('Bye!!');

art.learn('Math');
art.walk(400);
por.walk(400);

console.log('art job is ', art._job);

art._job = 'Teacher';

console.log('art job2 is ', art._job);
