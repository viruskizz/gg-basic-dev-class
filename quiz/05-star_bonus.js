const n = 5;
process.stdout.write("*\n");
for(let i = 1; i < n; i++) {
  process.stdout.write("*");
  for(let j = 1; j < i; j++) {
    process.stdout.write(j.toString());
  }
  for(let k = i; k > 0; k--) {
    process.stdout.write(k.toString());
  }
  process.stdout.write('*');
  process.stdout.write('\n');
}
for(let i = n; i > 0; i--) {
  process.stdout.write("*");
  for(let j = 1; j < i; j++) {
    process.stdout.write(j.toString());
  }
  for(let k = i; k > 0; k--) {
    process.stdout.write(k.toString());
  }
  process.stdout.write('*');
  process.stdout.write('\n');
}
process.stdout.write('*\n');