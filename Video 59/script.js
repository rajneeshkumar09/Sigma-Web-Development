// Javascript Faulty Calculator Exercise 9

const prompt = require('prompt-sync')();

/* Create a faulty calculator using JavaScript.
This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times
*/

let first_num = Number(prompt("Enter a naumber : "));
let second_num = Number(prompt("Enter a naumber : "));
let operation = prompt("Enter operation (+, -, *, /) : ");

// console.log(typeof operation, typeof first_num, typeof second_num)
// console.log(operation, first_num, second_num)
let num = Math.random();
// console.log(num)

if (operation == "+") {
    if (num < 0.1) {
        console.log(first_num - second_num)
    }
    else {
        console.log(first_num + second_num)
    }
}
else if (operation == "*") {
    if (num < 0.1) {
        console.log(first_num + second_num)
    }
    else {
        console.log(first_num * second_num)
    }
}
else if (operation == "-") {
    if (num < 0.1) {
        console.log(first_num / second_num)
    }
    else {
        console.log(first_num - second_num)
    }
}
else if (operation == "/") {
    if (num < 0.1) {
        console.log(first_num ** second_num)
    }
    else {
        console.log(first_num / second_num)
    }
}
else {
    console.log("Invalid Operation")
}


// a = Math.random() < 0.1
// console.log(a)