// จงหา หรม.
// 4, 8 => 4
// 90, 120 => 30
const readlineSync = require('readline-sync');

let a = +readlineSync.question('a?: '); 
let b = +readlineSync.question('b?: ');
let gcd = a < b ? a : b;
while(a % gcd !== 0 || b % gcd !== 0) {
  gcd--;
}
console.log('หรม. = ', gcd);