/**
 Create a function that takes an array of positive and negative numbers.
 Return an array where the first element is the count of positive numbers and the second element is the sum of negative numbers.
*/

students = {
	"Student 1" : "Steve",
	"Student 2" : "Becky",
	"Student 3" : "John"
};
// console.log(students);
// console.log(Object.keys(students));
// console.log(Object.values(students));
const names = Object.values(students);
console.log(names);
const sorted = names.sort((a, b) => -a.localeCompare(b));
console.log("SORTED : ", sorted);
