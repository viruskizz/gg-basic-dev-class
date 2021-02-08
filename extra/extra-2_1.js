// คำนวณหาค่า พื้นที่สี่เหลี่ยม โดยใช้ตัวแปล w h แสดงผลออกมา
// แทนค่า w = 2, h = 5
// Area = 10
const readlineSync = require('readline-sync');
 
let w = readlineSync.question('Width?: ');    // รับค่าตัวแปร มาจากแป้นพิมพ์ แล้วใส่ค่าลงในตัวแปร w
let h = readlineSync.question('Height?: ');   // รับค่าตัวแปร มาจากแป้นพิมพ์ แล้วใส่ค่าลงในตัวแปร h
console.log('w: ', w);
console.log('h: ', h);
console.log('typeof w: ', typeof w);
console.log('typeof h: ', typeof h);

w = parseInt(w);  // แปลงค่า
h = parseInt(h);  // แปลงค่า
console.log('--typeof w: ', typeof w);
console.log('--typeof h: ', typeof h);

// type
// Number
// String (Text)
let area = w * h;

console.log('Area = ' + area);


