try{
    let name = prompt("Enter your name:");
if (name === "" || name === null) {
    alert("Name not entered. Exiting...");
    throw new Error("No name entered");
}
else {
    alert("Hello, " + name + "!");
}
let cnf = confirm("Do you want to order food ?");
if(cnf !== true) {
    alert("Goodbye! See you next time!");
        throw new Error("Order cancelled");
    }
    const menu ={
        1:{name: "Pizza", price: 150},
        2:{name: "Burger", price: 100},
        3:{name: "Sandwich", price: 80}
    };
    let choice = prompt("1=Pizza($150) , 2=Burger($100) , 3=Sandwich($80)");
    let item = menu[choice];
    if (!item){
        alert("Invalid choice!");
        throw new Error("Invalid choice");
    }
    let q=Number(prompt("Enter your quantity"));
    if (isNaN(q) || q<1){
        alert("Invalid quantity");
        throw new Error("Invalid quantity");
    }
    let total=item.price*q;
    let promise = new Promise(function(resolve, reject) {
        if (total > 0) {
            resolve("You ordered "+ q +" quantity of " + item.name +". Total = $" + total);
        }
        else{
            reject("Error calculating bill");
        }
    });
    promise 
    .then(function(result){
        alert(result);
    })
    .catch(function(error){
        alert(error);
    });}
    catch (error) {
        alert("Something went wrong "+error.message);
}
