// Import required module
const readline = require("readline");
const Solution = () => {
  // Write your code here
  const rlInterface = readline.createInterface({
    input:process.stdin,
    output:process.stdout
  });
  rlInterface.question("Enter the first number: ",(num1)=>{
    rlInterface.question("Enter the Second number: ",(num2)=>{
      const n1 = Number(num1);
      const n2 = Number(num2);
      if(n1>n2){
        console.log("The maximum of the two numbers is: "+ n1);
      }
      else if(n2>n1){
        console.log("The maximum of the two numbers is: " + n2);
      }
      else{
        console.log("Both are Equal");
      }
      rlInterface.close();
    });
  })
};

Solution();
module.exports = Solution;
