const readlineSync = require('readline-sync');

const a = readlineSync.question('a: ');
const b = readlineSync.question('b: ');
const c = readlineSync.question('c: ');
const d = readlineSync.question('d: ');
const p = a * d + c * b;
const q = b * d;

console.log(`1: ${p}/${q}`);
console.log(`2: ${Math.floor(p/q)} + ${p % q} / ${q}`);
