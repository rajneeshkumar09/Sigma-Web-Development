const prompt = require('prompt-sync')();
// Factorial using reduce function 

let num = Number(prompt("Enter a number : "));
let fact_nums = [];

for (let index = 1; index <= num; index++) {
    fact_nums.push(index)
}

const fact_num = (a, b) => {
    return a*b;
}
// const factorial_num = nums.reduce((a, b) => {
//     return a*b;
// });
// const factorial_num = fact_nums.reduce(fact_num);
console.log(`Factorial of ${num} is ${fact_nums.reduce(fact_num)}`)


// Factorial using for loops

let number = Number(prompt("Enter a number : "));

if (number < 0) {
    console.log("{Error: not found} \n Factorial can be found only positive number");
}
else if (number==0 || number==1) {
    console.log(`Factorial of ${number} is 1`)
}
else {
    let fact = 1;
    for (let i=1; i<=number; i++) {
        fact *= i;
    }
    console.log(`Factorial of ${number} is ${fact}`)
}