let salary = Number(prompt("Enter your salary:"));
let Exp = Number(prompt("Enter your Experience:"));
if(Exp > 5 ){
    var bonus = 10;
}
else if(Exp < 5 ){
    bonus = 0;
}
let final = ((salary * bonus)/100)+salary;
alert("Result="+final);


let bill = Number(prompt("Enter your bill amount"));
if(bill > 500){
    var dis = 20;
}
else{
    dis = 10;
}
let discount = bill*dis/100;
let final = bill - discount;
alert ("Original bill: " + bill);
alert ("Discount applied: " + discount);
alert ("Final bill: "+ final);


let total=0;
for(let i=1;i<6;i++){
    let marks = Number(prompt("Enter your mark"+i));
    total=total+marks;
}
let avg = total/5;
alert("Total: "+total);
alert("Average: "+avg);
if (avg > 90){
    alert("Graade: A");
}
else if(avg > 75){
    alert("Grade: B");
}
else if(avg > 50){
    alert("Grade: C");
}
else{
    alert("Fail");
}
