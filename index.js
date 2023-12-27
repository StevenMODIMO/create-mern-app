import inquirer from "inquirer"

inquirer.prompt([
   "What is your name a**hole??"
]).then(answer => {
    console.log(answer)
}).catch(error => {
   console.log(error)
})
