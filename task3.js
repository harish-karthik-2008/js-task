let repeat = true;
while(repeat){
let name = prompt("Enter your name:");
let age = prompt("Enter your age:");
if (age >= 18) {
    alert("Hello " + name + ",You are eligible to vote");
}
else {
    alert("Sorry " + name + ",You are not eligible to vote");
}
if(confirm("Do you want to check again?")) {
    repeat = true; }
    else {
    repeat = false;
    alert("Goodbye"); }}

let username;
let psd;
let cnfm;
var choice;
username = prompt("Please enter your username");
psd = prompt("Please enter the password");
if (username == "Harish" && psd == "harish123") {
    cnfm = confirm("Do you want to borrow a book?");
    if (cnfm == true) {
        choice = prompt("1=Fiction, 2=Science, 3=History");
        switch (choice) {
            case "1":
                alert("You have selected Fiction");
                break;
            case "2":
                alert("You have selected Science");
                break;
            case "3":
                alert("you have selected History");
                break;
            default:
                alert("Invalid catagory!");
        }
    }
    else {
        alert("Maybe next time! Goodbye!");
    }
}
else {
    alert("Invalid login!");
}
