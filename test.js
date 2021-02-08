const startUsed = usage();
run(jj);
// run(araiva);

function run(fn) {
  console.time(fn.name);
  fn();
  console.timeEnd(fn.name);
  console.log(`The ${fn.name} script uses approximately ${(usage() - startUsed).toFixed(2)} MB`);
}

function usage() {
  return Math.round(process.memoryUsage().heapUsed / 1024 / 1024 * 100) / 100;
}

function araiva() {
  let cal = 4;
  for(let i = 1; i < 100000; i++) {
    cal += 4 / ((i * 2 + 1) * Math.pow(-1, i));
  }
  console.log(cal);
}

function jj() {
  let R = 3;
  let sara = 1-1/R;
  for(let i = 1; i < 100000; i++){
    R += 2;
    sara += 1/R;
    R += 2;
    sara -= 1/R;
    // if(4* sara >= 3.14159265359) break;
  }
  console.log(4 * sara);
}