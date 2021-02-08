/**
 * 
จงเขียนโปรแกรม คำนวณค่าไฟ โดยรับค่าจากผู้ใช้ แล้ว รายจ่ายออกมาทางหน้าจอ

ซึ่งรายละเอียดการคิดค่าไฟตามอัตราก้าวหน้า อ้างอิงจากการไฟฟ้านครหลวง (กฟน.) คือ
- ถ้าต่ำกว่า 50 หน่วย ถือว่า ฟรี
- 35 หน่วยแรก เหมารวมทั้งสิ้นเป็นจำนวนเงิน 85.21 บาท  
- 115 หน่วยต่อไป หน่วยละ 1.1236 บาท
- 250 หน่วยต่อไป หน่วยละ 2.1329 บาท
- ส่วนที่เกินกว่า 400 หน่วย หน่วยละ 2.4226บาท 
 */
const readlineSync = require('readline-sync');

let unit = +readlineSync.question('Unit?: '); 
let pay = 0; 
const rateA = 85.21;
const rateB = 1.1236;
const rateC = 2.1329;
const rateD = 2.4226;
if (unit < 50) {
  console.log("FREE!!!");
  process.exit(1);
}
pay = rateA;
if (unit < 150) {
  pay += (unit - 35) * rateB;
} else if (unit < 400) {
  pay += 115 * rateB + (unit - 150) * rateC;
} else {
  pay += (115 * rateB) + (250 * rateC) + (unit - 400) * rateD;
}
console.log('Pay: ', pay);