// // var first = prompt("Enter first number");
// // var second = prompt ("Enter second number");
// // var ops = prompt("Enter your operator + - * /");

// var first =5;
// var second = 6;
// var sum = first + second;

// // var sum = Number(first) + Number(second);
// console.log('This is the result: ' + sum)

function calc () {
    var first = prompt("Enter first number");
    var second = prompt ("Enter second number");
    var ops = prompt("Enter your operator + - * /");
    
    if (ops === "+") {
    return alert("The result is: " + Number(first) + Number(second))
    
        } else if (ops === "-") {
            return alert("The result is: " + Number(first) - Number(second))
    
        } else if (ops === "*") {
            return alert("The result is: " + Number(first) * Number(second))

        } else if (ops === "/") {
            return alert("The result is: " + Number(first) / Number(second))

        } else if (ops !== "/" || ops !== "+" || ops !== "-" || ops !== "*" ) {
        return alert ("ERROR")

    }
    return alert ("ERROR")
}
calc()