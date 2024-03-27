import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 123;

let pinAnswer = await inquirer.prompt([
  {
    message: "What's your pin",
    name: "pin",
    type: "number",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log("Your pin is correct!");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please Select An Option",
      type: "list",
      choices: ["Withdraw", "Fast Cash", "Check Balance"]
    },
  ]);


  if (operationAns.operation === "Withdraw") {
      
    let amountAns = await inquirer.prompt({

      name:"amount",
      message:"Enter Your Amount",
      type:"number"

    })

    if (amountAns.amount > myBalance) {
      console.log(`You cannot withdraw more the your balance and your balance is ${myBalance}`);
      
    }

    else if (amountAns.amount <= myBalance) {
      
    
    let remainig = myBalance - amountAns.amount;
    console.log(`${amountAns.amount} is withdrawn from ${myBalance} now your balance is ${remainig}`);
    }
  }

  else if (operationAns.operation === "Fast Cash") {
    let options = await inquirer.prompt({
      name:"option",
      type:"list",
      message:"Select an amount",
      choices:["1000","2000","5000","10000"]
    })
    let remainig = myBalance - options.option 
    console.log(`${options.option} is withdrawn from ${myBalance} now your balance is ${remainig}`);
    

  }

  else if (operationAns.operation === "Check Balance"){
    console.log(`Your current balance is ${myBalance}`);
    
  }

} else {
  console.log("Your pin is incorrect");
}
