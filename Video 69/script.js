console.log("Factorial")
// const prompt = require('prompt-sync')();

let num = Number(prompt("Enter a number : "));

function factorial(number) {
    let arr = Array.from(Array(number + 1).keys());
    // console.log(arr.slice(1,))
    // let c = arr.slice(1,).reduce((a, b) => {
    //     return a*b;
    // });
    let c = arr.slice(1,).reduce((a, b) => a*b);
    return c;
}

function factfor(number) {
    let fact = 1;
    for (let index = 1; index <= number; index++) {
        fact *= index;
    }
    return fact;
}

console.log(factorial(num))

let n = Number(prompt("Enter a number : "));
console.log(factfor(n))