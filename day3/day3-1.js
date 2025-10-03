let pin;
let amount;
let deposit;
let balance = 5000;
var choice;
let repeat;
while (true){
pin = prompt("Please enter your pin");
if (pin == 1234) {
    choice = prompt("1=Withdraw, 2=Deposit, 3=Check Balance");
    switch (choice) {
        case "1":
            amount = prompt("Enter amount");
            if (amount <= 5000) {
                alert ("Withdrawal successful ! New balance :" + (balance - amount));
            }
            else {
                alert ("Infuffient balance");
            }
            break;
        case "2":
            deposit = prompt("Enter amount");
            alert ( deposit + "has been deposited");
            break;
        case "3":
            alert ("Your balance is 5000");
            break;
    }
    if (confirm("Do you want to check again?")) {
        repeat = true;
    }
    else {
        repeat = false;
        alert("Goodbye");
    }
}
else {
    alert ("Invalid pin");
}}
