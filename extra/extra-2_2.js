// ทำโปรแกรม คำนวณพื้นวงกลม โดยรับค่า R จากผู้ใช้
// แสดงผล  Circle = ...
const readlineSync = require('readline-sync');

let r = readlineSync.question('Radius?: ');    // รับค่าตัวแปร มาจากแป้นพิมพ์ แล้วใส่ค่าลงในตัวแปร w
// let circle = Math.PI * r * r;
r = parseInt(r);

if (!isNaN(r)) {
  let circle = Math.PI * Math.pow(r, 2);
  console.log(`Circle =  ${circle}`);
} else {
  console.log('Could not calculate text');
}