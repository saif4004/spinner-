
const symbolArray = ['|','/','-','\\','|'];
let delayVal = 100;

for (const symbol of symbolArray) {
  setTimeout(() => {
    process.stdout.write(`\r${symbol}   `);
  }, delayVal);
  delayVal += 200;
}


