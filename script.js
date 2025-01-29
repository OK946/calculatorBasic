const addButton = document.getElementById("addButton");
addButton.addEventListener("click",addition)
const subButton = document.getElementById("subButton");
subButton.addEventListener("click",subtraction)
const multButton = document.getElementById("multButton");
multButton.addEventListener("click",multiplication)
const divButton = document.getElementById("divButton");
divButton.addEventListener("click",division)
// these declare the functionality of the buttons so that they activate their corresponding function when clicked.


let num1 = Number(prompt("Please enter the first number"));
while ((isNaN(num1))){
    num1 = Number(prompt("Please enter the first number"))
    // while the recieved value of the prompt isn't a number, it regives the prompt
}
console.log(num1);
// the prompt sets the inputed value to the num1 variable 
let num2 = Number(prompt("Please enter the second number"));
while ((isNaN(num1))){
    num2 = Number(prompt("Please enter the second number"));
        // while the recieved value of the prompt isn't a number, it regives the prompt
}
console.log(num2);
// the prompt sets the inputed value to the num2 variable 
function addition(){
    let answer = (num1 + num2);
    document.write(answer);
}
// adds the two numbers and displays the solution
function subtraction(){
    let answer = (num1 - num2);
    document.write(answer);
}
// subtracts the two numbers and displays the solution
function multiplication(){
    let answer = (num1*num2);
    document.write(answer);
}
// multiplies the two numbers and displays the solution
function division(){
    let answer = (num1/num2);
    document.write(answer);
}
// divides the two numbers and displays the solution

