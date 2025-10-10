let x = prompt("Enter file:");
let y = prompt("Change extension to:");
let z = x.slice(0,x.lastIndexOf(".")+1);
alert(z+y);


let num1=prompt("Enter num1");
let num2=prompt("Enter num2");
if(num1<0 || num2<0){
    if(num1<0 && num2<0){
        alert("false");
    }
    else{
        alert("True");
    }
}
else{
    alert("False");
}


let str = prompt("Enter your string");
let f = str[0];
let m = str.slice(1,str.length-1);
let l = str[str.length-1];
let swap = l+m+f;
console.log(swap);
