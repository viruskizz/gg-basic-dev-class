const aSchools = [100, 200, 300];
const bSchools = [300, 500, 700];
const cSchools = aSchools;
const dSchools = [100, 200, 300];
const eSchools = [...bSchools]; // clone Array
cSchools[1] = 10000;
eSchools[1] = 10000;

console.log('aSchools: ', aSchools);
console.log('bSchools: ', bSchools);
console.log('cSchools: ', cSchools);
console.log('dSchools: ', dSchools);
console.log('eSchools: ', eSchools);
if (cSchools === aSchools) {
  console.log('C,A Equal');
} else {
  console.log('C,A Diff');
}
if (dSchools === aSchools) {
  console.log('D,A Equal');
} else {
  console.log('D,A Diff');
}