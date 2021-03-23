/**
 Create a function that takes an array of positive and negative numbers.
 Return an array where the first element is the count of positive numbers and the second element is the sum of negative numbers.
*/

// const array = [4, 1, 3, 5, 9];
const array = [2, 3, 4];
const evens = [];
const odds = [];
let result;
array.forEach(el => {
	if (el % 2 === 0) {
		evens.push(el);
	} else {
		odds.push(el);
	}
});
if(evens.length === 1) {
	result  = evens[0];
}
if(odds.length === 1) {
	result  = odds[0];
}
console.log(result);
