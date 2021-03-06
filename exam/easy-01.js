/**
 Create a function that takes an array of positive and negative numbers.
 Return an array where the first element is the count of positive numbers and the second element is the sum of negative numbers.
*/

const array = [92, 6, 73, -77, 81, -90, 99, 8, -85, 34];
let count = 0;
let sum = 0;
array.forEach(el => {
	count += el > 0 ? 1 : 0;
	sum += el < 0 ? el : 0;
});
const result = [count, sum];
console.log(result);
