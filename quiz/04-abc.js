const readlineSync = require('readline-sync');
 
const a = +readlineSync.question('What is a: ');
const b = parseInt(readlineSync.question('What is b: ') , 10);
const c = new Number(readlineSync.question('What is c: '));
const m = readlineSync.questionInt('What is m: ');

console.log("type a: " + a + " => " + typeof a);
console.log("type b: " + b + " => " + typeof b);
console.log("type c: " + c + " => " + typeof c);
console.log("type d: " + m + " => " + typeof m);

let y;
if (m > 5) {
  let x = 10;
  console.log("in-x = " + x);
  y = a * m * 2 + b * m + c;
} else if (m === 5){
  let x = 20;
  console.log("in-x = " + x);
  y = a * m * 2 + b * m - c;
} else {
  let x = 30;
  console.log("in-x = " + x);
  y = a * m * 2 + b * m;
}
// console.log("x = " + x);
console.log("Y = " + y);