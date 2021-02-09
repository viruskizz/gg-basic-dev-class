/**
 * Sort Array to accending
 * ห้ามใช้คำสั่ง sort
 */
const n = 100;
let array = [];
for(let i = 0; i < n; i++) {
  const number = Math.round(Math.random() * n);
  array.push(number);
}
console.log(array);