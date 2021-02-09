const array = [-10, -3, -20, -100, -5];
/// จงแสดงค่าสูงสุด
let max = Number.MIN_SAFE_INTEGER; // Start from minimum of number
let min = Number.MAX_SAFE_INTEGER;
for(let i = 0; i < array.length; i++) {
  if(array[i] > max) {
    max = array[i];
  }
}

for(let i = 0; i < array.length; i++) {
  if(array[i] < min) {
    min = array[i];
  }
}
console.log('min from array: ', min);
console.log('max from array: ', max);