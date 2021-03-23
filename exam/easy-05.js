/**
 Create a function that takes an array of positive and negative numbers.
 Return an array where the first element is the count of positive numbers and the second element is the sum of negative numbers.
 */
const budgets = [
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
];
let sum = 0;
budgets.forEach(el => {
  const {age, name, budget} = el;
  sum += budget;
});
const total = budgets.reduce((acc , {budget}) => acc + budget, 0);
console.log("TOTAL: ", total);
console.log(sum);
