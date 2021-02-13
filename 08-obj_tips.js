
const text = 'This is my first time';

console.log('text before: ', text);

console.log('text long: ', text.length);
console.log('text after: ', text.replace('This', 'That'));

// declare as arrow function
const multipy = (a, b) => {
  return a * b;
}

const divide = (a, b) => a / b;

const plus = function(a, b) {
  return a + b;
}

const printFullname = (logName) => {
  console.log('my name is')
  logName;
}

function logName(firstname, lastname) {
  console.log(`${firstname} ${lastname}`);
}

printFullname(logName('Atichat', 'Thongnak'));