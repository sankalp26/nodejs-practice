//taking input from Terminal

//1. Import readline - helps us read input from the terminal
const readline = require("readline");

//2. Configure interface to connect Application to Terminal
const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  // input  -> where we read data from (keyboard)
  // output -> where we display data (terminal screen)
});

//3. Reading Values
interface.question("Enter the first number: ", (num1) => {
  interface.question("Enter the second number: ", (num2) => {
    //use num1 and num2
    const sum = Number(num1) + Number(num2);
    console.log("Sum is :" + sum);
    interface.close(); //Close the readline interface- This ends the program properly
    
  });
});
