// Iteration
// คำนวณ ครน. คูณร่วมน้อย
// ตัวประกอบของ a และ b คูณกัน ได้ค่าน้อยที่สุด
// 3, 4 => 12
// 10, 20 => 200 => 20
// 27, 30 => 3 3 3, 3 2 5, => 270
const readlineSync = require('readline-sync');

let a = +readlineSync.question('a?: '); 
let b = +readlineSync.question('b?: ');
let lcm = a >= b ? a : b;
while(lcm % a !== 0 || lcm % b !== 0) {
  lcm ++;
}
console.log("ครน. = ", lcm);