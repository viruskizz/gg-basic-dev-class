const iphone = 20000;
const budget = 500;
const interest = 0.03;
let money = 0;  // เงินปัจจุบัน
let year = 0;   // ปีที่สะสมเงิน
money = budget;
while(money <= iphone) {
  /// lastMoney + (thisMoney * interest) = money * (1 + interest)
  money = money * (1 + interest);
  year++;
  // console.log(`Year${year} : ${money}`);
}
console.log('Get interest only => ', year , ' years');

yearlyMoney = budget * 12;
money = 0;
year = 0;
while(money <= iphone) {
  /// thisYearMoney + ((lastYearMoney + yearMoney) * interest)
  money = money + yearlyMoney + ((money + yearlyMoney)  * interest);
  year++;
  console.log(`Year${year} : ${money}`);
}
console.log('Deposite & Interest => ', year , ' years');
