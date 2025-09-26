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