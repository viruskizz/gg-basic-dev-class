/**
 Write a program that asks the user to type 10 int egers of an array
 and an int eger value V and an index value i between 0 and 9.
 The program must put the value V at the place i in the array,
 shifting each element right and dropping off the last element.
 The program must then write the final array.
 */

// create array of number length = 10
// ask user to put v into specific index;
// operation put into index and shift other to the right;
const readlineSync = require('readline-sync');

const array = [];
for(let i = 0; i < 10; i++) {
  const number = Math.round(Math.random() * 100);
  array.push(number);
}
 
const indexOfV = +readlineSync.question('Put V into index?: ');
if (indexOfV < 0 || indexOfV > array.length - 1) {
  console.log('Error cannot find index in array');
  process.exit(1);
}
console.log(`Before: `, array);
let temp = array[indexOfV];
array[indexOfV] = 'V';
for(let i = indexOfV; i < array.length - 1; i++) {
  temp2 = array[i+1];
  array[i+1] = temp;
  temp = temp2;
}
console.log(`AfterShift: `, array);
