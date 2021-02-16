/**
 * JS ES6
 * String, Array, Object
 */

const words = 'this is my class';
console.log(words);
console.log(words.split(' '));
console.log(words.trim());
console.log(words.replace(/i/g , 'a'));   //regex regular expression
const pattern = /[A-Z]/g;
'this'.match(pattern) ? console.log('Match') : console.log('Mismatch');

// array
const array = [1, 2, 3, 4, 5, 6];

array.forEach((element, index, array) => {
  console.log(`${index} => ${element}`);
})
const newArray = array.map(element => element * 2);
console.log(newArray);
// console.log(array.sort((a, b) => b - a));
console.log(array.find(el => el > 2));
console.log(array.filter(el => el > 2));

const copiedArray = [...array, 7, 8, 9];
console.log(copiedArray);

// object
const profile = {
  firstname: 'Araiva',
  lastname: 'Viruskizz',
  age: 30,
}
const newProfile = Object.assign({birthday: '20/20/2000'}, profile);
console.log(newProfile);
console.log({
  ...profile,
  firstname: 'Big',
  birthday: '01/01/2000'
});