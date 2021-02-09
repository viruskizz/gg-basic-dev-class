/**

1  
2  6
3  7  10
4  8  11 13
5  9  12 14 15

*/
const n = 5;
for(let i = 1; i <= n; i++) {
  let cal = i;
  process.stdout.write(`${i} `);
  for(let j = n - 1; j > n - i; j--) {
    cal += j;
    // process.stdout.write(`${cal} `);
    process.stdout.write(`${j} `);
  }
  process.stdout.write('\n');
}
