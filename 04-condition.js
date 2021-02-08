/// condition เงื่อนไข หรือ การเปรียบเทียบ ผลลัพธ์ มี true , false
/// ความสามารถของคอมพิวเตอร์
/// -- การคำนวณ
/// -- การทำซ้ำ
/// <  <=  >  >=  ==  ===  ! !==
/// ตัวเชื่อม || &&

console.log("5 < 10 : ", 5 < 10);
console.log("1 < 0 : ", 1 < 0);
console.log("1 <= 1 : ", 1 <= 1);
console.log("3 >= 3 : ", 3 >= 3);
console.log("!true", !true);
console.log("!false", !false);

console.log("1 == 1 : ", 1 == 1);
console.log("1 == 1 : ", '1' == 1);   // equal
console.log("1 === 1 : ", '1' === 1); // deep equal
console.log("1 !== 1 : ", 1 !== 1); // deep equal


console.log('true || true: ', true || true);
console.log('true || false: ', true || false);
console.log('false || true: ', false || true);
console.log('false || false: ', false || false);  /// Focus only falsy for OR condition

console.log('true && true: ', true && true);  /// Focus only truely for AND condition
console.log('true && false: ', true && false);
console.log('false && true: ', false && true);
console.log('false && false: ', false && false);

console.log(1 > 1 || 5 === 5);

/// การใช้งาน

if ( /*condition*/ true || false) {
  /// Correct Statement
} else {
  /// False Statement (Optional)
}

if(5 > 10) {
  console.log('YES');
} else {
  console.log('NO');
}

/// Art มีเงิน 100 บาท Mind มีเงิน 200 บาท 
/// ถ้าแสดงผล คนที่มีเงินมากกว่า ออกมา
const art = 200;
const mind = 200;
if (art >= mind) {
  console.log("Art is richer");
} else if (mind >= art) {
  console.log("Mind is richer");
} else {
  console.log("Mind equal Art");
}

// if (art >= mind) {
//   console.log("Art is richer");
// }
// if (mind >= art) {
//   console.log("Mind is richer");
// }
// if (mind === art){
//   console.log("Mind equal Art");
// }

/// Switch Case
const weather = 'SUNNY';
switch(weather) {
  case 'RAIN':
    console.log('Today is raining');
    break;
  case 'SUNNY':
    console.log('Today is sunny');
    break;
  case 'STORM':
    console.log('Today is storm');
    break;
  default:
    console.log('I don\'t know');
}
