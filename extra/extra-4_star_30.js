/**

5 
4 5 
3 4 5 
2 3 4 5 
1 2 3 4 5 

 */
const n = 5;
for(let i = n; i >= 1; i--) {
  for(let j = i; j <= n; j++) {
    process.stdout.write(j.toString() + ' ');
  }
  // process.stdout.write('\t\t i => ' + i);
  process.stdout.write('\n');
}