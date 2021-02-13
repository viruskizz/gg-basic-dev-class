/**
 * Array is box start from index = 0;
 */
let room1 = 40;
let room2 = 45;
let room3 = 50;
let room4 = 45;
let rooms = [40, 45, 50, 45, 60, 55]; // length=6, lastIndex=5
// let rooms = [40, 45, 50, 45, 60, 55, 100, 1000, 5000]; // length=9, lastIndex=8
// console.log(room1);
console.log(rooms);
rooms[0] = 60;
console.log(rooms);
console.log(`size of rooms = ${rooms.length}`);
console.log(`last index value =  ${rooms[rooms.length - 1]}`);
rooms.push('Student');
rooms.unshift('School');
// rooms[10] = 40;

console.log(rooms);

// for(let i = 0; i < rooms.length; i++) {
//   // console.log(`student room ${i+1} = ${rooms[i]} person`);
//   console.log(rooms[i]);
// }
const schools = [
  [50, 45, 55, 65],
  [100, 200, 300, 400, 500, 200],
  [1000, 2000, 3000, 400, 5000],
]
console.log('Schools: ', schools);
console.log('amount room of Schools 1: ', schools[0].length);

for(let i = 0; i < schools.length; i++) {
  // console.log(`school${i}: ` , schools[i]);
  sum = 0;
  for(let j = 0; j < schools[i].length; j++) {
    sum += schools[i][j];
  }
  console.log(`amount of Schools ${i+1}: `, sum);
}
/// แสดงผลจำนวนนักเรียน ของแต่ละโรงเรียน