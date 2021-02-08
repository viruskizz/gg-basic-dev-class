// เขียนโปรแกรม คำนวณเกรด 80, 70, 60, 50
/// ทดลองเขียน 10 นาที
/// package
const readlineSync = require('readline-sync');
 
const point = readlineSync.question('How many your point: ');
// console.log('your point is ' + point);
let grade;
if (point >= 100) {
  grade = '';
} else if (point >= 80) {
  grade = 'A';
} else if (point >= 70) {
  grade = 'B';
}else if (point >= 60) {
  grade = 'C';
}else if (point >= 50) {
  grade = 'D';
} else if (point >= 0){
  grade = 'F';
}

// if(grade === '') {
//   console.log('Point is invalid');
// } else {
//   console.log('Your grade is ' + grade);
// }

if (grade) {
  console.log('Your grade is ' + grade);
} else {
  /// grade is false, 0, Nan, '', undefined
  console.log(grade);
  console.log('Point is invalid');
}