//
// ตัวแปร เปลี่ยนเสมือนกล่อง ที่สามารถใส่ค่าอะไรลงไปก็ได้ แล้วนำกล่องที่ตั้งชื่อแล้วนำไปใช้
//
// ตั้งตัวแปล ชื่อจริง และ นามสกุล แล้วนำมาแสดงผล
// Math Operation + - * / %
let jj = true || false;
console.log(jj);

let name; // declare variable without initial value
name = 'Art Atichart';  // assign value to variable

const prefix = 'Mr.';
let firstname = 'Araiva';   // declare variable with initial value
let lastname = 'Viruskizz';

console.log('Art Atichart');
console.log(firstname + ' ' + lastname);

firstname = 'Thitiwut';
lastname = 'Somsa';
console.log(prefix + firstname + ' ' + lastname);

let sum = 0;
let x = 10;
let y = 20;
sum = x;
console.log('1-sum = ' + sum);
sum = sum + y;
console.log('2-sum = ' + sum);
sum += x;   // sum = sum + x;
console.log('3-sum = ' + sum);
sum -= y;   // sum = sum - y;
console.log('4-sum = ' + sum);

let text = '';
console.log('text: ', text);
text += prefix;
console.log('text: ', text);
text += firstname;
console.log('text: ', text);
