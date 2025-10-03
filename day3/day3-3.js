let income = Number(prompt("Enter your income"));
let rent = Number(prompt("Enter your rent"));
let groceries = Number(prompt("Enter your groceries expense"));
let transport = Number(prompt("Enter your transport expense"));
let expense = rent + groceries + transport;
if (income < expense) {
    alert("Total Expenses: " + expense); 
    alert("Remaining: " + (income - expense)); 
    alert("Percentage spent: " + (expense / income) * 100);
    alert("You are overspending");
}
else{
    alert("Total Expenses: " + expense); 
    alert("Remaining: " + (income - expense)); 
    alert("Percentage spent: " + (expense / income) * 100);
    alert("You are within budget");
}
