/**
 * Callback in JS
 * สรุปยอด รายปี
 * สรุปรายวัน
 * สรุปรายเดือน
 * สรุปรายปี
 */

// callback
// setTimeout(() => {
//   console.log('Araiva');
//   setTimeout(() => {
//     console.log('Aporlo');
//     setTimeout(() => {
//       console.log('iTheWidow');
//       setTimeout(() => {
//         console.log('Tnp');
//       }, 2 * 1000)
//     }, 2 * 1000)
//   }, 1 * 1000)
// }, 3 * 1000)

logName('Araiva', 3)
  .then(res => logName('Aporlo', -1))
  .then(res => logName('iTheWidow', 1))
  .then(res => logName('Tnp', 1))
  .catch(e => {
    console.log(e);
  })
aLogName();

async function aLogName() {
  // จับ Error
  try {
    await logName('Mind', 2);
    await logName('Krit', -1)
    await logName('Man', 2)
    await logName('Lalit', 2)
  } catch (e) {
    console.log(e);
  }
}

function logName(name, sec) {
  return new Promise((resolve, reject) => {
    if(sec < 0) {
      reject('Error second cannot below than 0');
    } else {
      setTimeout(() => {
        console.log(name);
        resolve();
      }, sec * 1000)
    }
  })
}
