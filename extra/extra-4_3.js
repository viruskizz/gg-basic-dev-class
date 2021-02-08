const readlineSync = require('readline-sync');

let count = 0;
while(true) {
  let number = +readlineSync.question('input number?: ');
  if(!number) {
    break;
  }
  count += (number >= 100 && number <= 200) ? 1 : 0;
  //  if(!number)  => number === 0, false, undefined, null, Nan
  //  if(number) { // number มีค่า
}
console.log('Number bet 100-200 = ', count);
