const array = [10, 200, 300];
// swap first and last of array
// [300, 10];
console.log('Before: ', array);
let temp = array[2];
array[2] = array[0];
array[0] = temp;
console.log('After: ', array);
