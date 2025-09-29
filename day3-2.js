let q1;
let q2;
let q3;
let score = 0;
q1 = prompt("Which is the capital of India. \n 1) Chennai 2) Delhi 3) Mumbai");
switch (q1) {
    case "1":
        alert ("Your answer is incorrect");
        break;
    case "2":
        score += 1;
        alert ("Your answer is correct");
        break;
    case "3":
        alert ("Your answer is incorrect");
        break;
}
q2 = prompt("Which is India's national game. \n 1) hockey 2) kabaddi 3) cricket");
switch (q2) {
    case "1":
        score += 1;
        alert ("Your answer is correct");
        break;
    case "2":
        alert ("Your answer is incorrect");
        break;
    case "3":
        alert ("Your answer is incorrect");
        break;
}
q3 = prompt("Which ipl team won  more ipl tropies. \n 1) KKR 2) RCB 3) CSK");
switch (q3) {
    case "1":
        alert ("Your answer is incorrect");
        break;
    case "2":
        alert ("Your answer is incorrect");
        break;
    case "3":
        score += 1;
        alert ("Your answer is correct");
        break;
}
alert("Your final score : " + score + "/3");