// Solution Exercise 9 by harry

let random = Math.random();
console.log(random)

let a = prompt("Enter first number : ");
let b = prompt("Enter second number : ");
let c = prompt("Enter operation (+, -, *, /) : ");

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}

if (random > 0.1) {
    // Perform correct operation
    // console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else {
    // Perform Faulty operation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}