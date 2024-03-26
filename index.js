import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 123;
let pinAnswer = await inquirer.prompt([
    {
        message: "What's your pin",
        name: "pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Your pin is correct!");
    inquirer.prompt([{
            name: "operation",
            message: "Please Select An Option",
            type: "list",
            choices: ["Withdraw", "Check Balance"]
        }]);
}
else {
    console.log("Your pin is incorrect");
}
