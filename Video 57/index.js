console.log("I am a tutorial on loops")

let a = 1;
// console.log(a)
// console.log(a+1)
// console.log(a+2)

// for (let i = 0; i < 100; i++) {
//     console.log(a+i)
//     // console.log(2*i-1)
// }

// console.log("\nFirst n-Odd natural number : ")
// for (let i = 1; i <= 10; i++) {
//     console.log(2*i-1)
// }

let obj = {
    name : "Harry",
    role : "Programmer",
    company : "codewithharry AI"
}

console.log("\nfor-in loop : ")
for (const key in obj) {
        const element = obj[key];
        console.log(key, ":", element)
}

console.log("\nfor-of loop : ")
for (const iterator of "Rajneesh") {
    console.log(iterator)
}

console.log("\nwhile loop : ")

let i = 0;
while (i<6) {
    console.log(i)
    i++;
}

console.log("\ndo-while loop : ")

let b = 19; 
do {
    console.log(b)
    b++;
} while (b<=10);