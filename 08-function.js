/**
 * ชุดคำสั่งที่สามารถใช้งานซ้ำ
 * reuse code;
 */
const school = require('./08-schools');
const school1 = school.createSchool(2, 3);
const school2 = school.createSchool(5, 2);

console.log(school1);
console.log(school2);

// born function
logName('Piyanut', 'Plaimee');
const total = sum(1, 2);
console.log('Total: ', total);
test();


function logName (firstname, lastname) {
  console.log(`${firstname} ${lastname}`);
}

function sum(a , b) {
  return a + b; 
}
function test() {
  console.log('5555');
}
