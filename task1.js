let num1 = "80";
let mark = Number(num1);
switch (true) {
    case (mark >= 90 && mark <= 100):
        console.log("Grade:A");
        break;
    case (mark >= 75 && mark <= 89):
        console.log("Grade:B");
        break;
    case (mark >= 50 && mark <= 74):
        console.log("Grade:C");
        break;
    default:
        console.log("Fail");
}