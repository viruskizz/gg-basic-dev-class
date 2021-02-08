/**

1 
1 2 1 
1 2 3 2 1 
1 2 3 4 3 2 1 
1 2 3 4 5 4 3 2 1 

 */
const n = 5;
for(let i = 1; i <= n; i++) {
  for(let j = 1; j <= i; j++) {
    process.stdout.write(j.toString() + ' ');
  }
  for(let k = i - 1; k >= 1 ; k--) {
    process.stdout.write(k.toString() + ' ');
  }
  // process.stdout.write('\t\t i => ' + i);
  process.stdout.write('\n');
}