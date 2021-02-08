/**
 * Loop or Iteration
 */
let i = 0;
while(i <= 100) { /* loop condition */ 
  if (i % 2 === 0) {
    // เลขคู่ เอกลักษณ์ คือ หาร 2 ลงตัว ไม่มีเศษ
    console.log(i);
  }
  // i = i + 1;  // มีการเปลี่ยนแปลงค่าเสมอ
  // i += 1;  // มีการเปลี่ยนแปลงค่าเสมอ
  i++;
  // ++i;
}
let j = 0;
while(true) {
  if (j % 2 === 0) {
    // เลขคู่ เอกลักษณ์ คือ หาร 2 ลงตัว ไม่มีเศษ
    console.log(j);
  }
  if (j === 50) {
    break;
  } 
  j++;
}

for(let k = 0; k < 100; k++) {
  console.log('k: ', k);
}