/**
  1 2 3 4 5
  2 3 4 5 1
  3 4 5 2 1
  4 5 3 2 1
  5 4 3 2 1
 */
const n = 5;
for(let i = 1; i <= n; i++) {
  for(let j = i; j <= n; j++) {
    process.stdout.write(j.toString() + ' ');
  }
  for(let k = i - 1; k > 0; k--) {
    process.stdout.write(k.toString() + ' ');
  }
  process.stdout.write('\t i => ' + i);
  process.stdout.write('\n');
}
