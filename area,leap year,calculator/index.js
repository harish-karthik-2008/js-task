let breadth = Number(prompt("Enter breadth of triangle:"));
let height = Number(prompt("Enter heigth of triangle:"));
let area = (breadth/2)*height;
alert("Area of triangle: " + area +" square units.");


let year = Number(prompt("Enter the year:"));
if((year % 4 ===0 && year % 100 !==0) || (year % 400 === 0)){
    alert("It is leap year");
}
else{
    alert("It is not a leap year");
}

let n1 = Number(prompt("Enter number 1:"));
let n2 = Number(prompt("Enter number 2:"));
let opp = prompt("Enter your opperator");
let num=0;
if(!isNaN(n1) || !isNaN(n2)){
    switch (opp) {
        case "+":
            num = n1 + n2;
            alert("Result: " + num);
            break;
        case "-":
            num = n1 - n2;
            alert("Result: " + num);
            break;
        case "*":
            num = n1 * n2;
            alert("Result: " + num);
            break;
        case "/":
            num = n1 / n2;
            alert("Result: " + num);
            break;
        default:
            alert("Invalid opperaors");
    }
}
else{
     alert("Invalid number");
}
