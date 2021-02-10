const lines = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let waitTime = 100;

for (let line of lines) {
  setTimeout(() => {
    process.stdout.write(`\r${line}     `);
  }, waitTime);
  waitTime += 200;
}