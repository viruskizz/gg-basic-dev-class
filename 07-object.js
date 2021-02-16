let bigFirstname = 'Piyanut';
let bigLastname = 'Palime';
let bigAge = 18;
let bigHeight = 170;
console.log(`Big Height ${bigHeight} cm.`);

let bigProfiles = ['Piyanut', 'Palime', 18, 170];

console.log(`Big Height ${bigProfiles[3]} cm.`);

let bigProfile = {
  firstname: 'Piyanut',
  lastname: 'Plaimee',
  age: 18,
  height: 170,
  favoriteColors: ['Red', 'Blue', 'Green'],
  address: {
    province: 'Ratchaburi',
    country: 'Thailand',
  }
}
console.log(`Big Height ${bigProfile.height} cm.`);

console.log(bigProfiles);
console.log(bigProfile);

console.log(`Big live at ${bigProfile.address.province} in ${bigProfile.address.country}`);
console.log(`Big love ${bigProfile.favoriteColors[0]}`);

// สร้างตัวแปร ห้อง ที่มี นักเรียน 3 คน (ชื่อ นามสกุล ส่วนสูง)

const rooms = [
  {
    firstname: 'Atichart',
    lastname: 'Thongnak',
    height: 180,
  },
  {
    firstname: 'Piyanut',
    lastname: 'Plaime',
    height: 170,
  },
  {
    firstname: 'Lalitpat',
    lastname: 'Santiwong',
    height: 160,
  },
  {
    firstname: 'Kanjana',
    lastname: 'Mind',
    height: 165,
  }
];

let sumHeight = 0;
for(let i = 0; i < rooms.length; i++) {
  sumHeight += rooms[i].height
}
let avgHeight = sumHeight / rooms.length;
console.log(`Average Height of this room = ${avgHeight}`);