/**

6. Exercise CozaLozaWoza (Loop&Condition) : Write a program called CozaLozaWoza 
which prints the numbers 1 to 110, 11 number per line.
The program shall print
“Coza” in place of numbers which are multiples of 3,
“Loza” for multiples of 5,
“Woza” for multiple of 7,
“CozaLoza” for multiple of 3 and 5 so on.

 */
// Show => OK
// Log per line => OK
// Show text with condition
const n = 110;
for(let i = 1; i<= n; i++) {
  // console.log(i);
  if (i % 3 === 0 && i % 5 === 0) {
    process.stdout.write('CozaLoza ');
  } else if (i % 5 === 0) {
    process.stdout.write('Loza ');
  } else if (i % 7 === 0) {
    process.stdout.write('Woza ');
  } else if (i % 3 === 0) {
    process.stdout.write('Coza ');
  } else {
    process.stdout.write(i.toString() + ' ');
  }
  if(i % 11 === 0) {
    process.stdout.write("\n");
  }
}