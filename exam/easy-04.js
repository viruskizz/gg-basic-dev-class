/**
 Create a function that takes an array of positive and negative numbers.
 Return an array where the first element is the count of positive numbers and the second element is the sum of negative numbers.
 */

const items = {
  "Monopoly": 11.99,
  "Secret Hitler": 35.99,
  "Bananagrams": 13.99
};
let sum = 0;
Object.values(items).forEach(el => {
  sum += el;
});
const total = Object.values(items).reduce((accumulate, current) => accumulate + current, 0);
const isFree = sum > 50;
console.log("total: ", total);
console.log(isFree);
