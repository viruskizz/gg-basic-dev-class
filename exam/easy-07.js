/**
 Create a function that takes an array of positive and negative numbers.
 Return an array where the first element is the count of positive numbers and the second element is the sum of negative numbers.
 */

const array = [1, 2, 3, 4, 6, 7, 8, 9, 10];
const sorted = array.sort((a, b) => a - b);
let missing;
for (let i = 0; i <sorted.length; i++) {
  if (sorted[i] !== i + 1) {
    missing = i + 1;
    break;
  }
}
console.log(missing);

// array.sort((a, b) => a - b).forEach((el, index) => {
//   console.log(index + " => " + el);
//   if (el !== index + 1) {
//     missing = index + 1;
//     break;
//   }
// });
// console.log(missing);
