/**
 Create a function that takes an array of positive and negative numbers.
 Return an array where the first element is the count of positive numbers and the second element is the sum of negative numbers.
 */
const arr = [
  [1, 2, 3],
  [0, 2, 1],
  [5, 7, 33]
];
let count = 0;
arr.forEach(el => {
  el.forEach(num => {
    count += (num === 1) ? 1 : 0;
  });
});
console.log(count);
