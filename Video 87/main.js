const fs = require("fs");
// const fs = require("fs/promises");

// console.log(fs);

console.log('Starting');
// fs.writeFileSync("raj.txt", "Raj is a good boy");

fs.writeFile("abhi.txt", "Abhishek is also a good boy", () => {
    console.log('Done');
    fs.readFile("abhi.txt", (error, data) => {
        console.log(error, data.toString());
    });
});

fs.appendFile("raj.txt", " Harry Robo", (e, d) => {
    console.log(d);
})

console.log('Ending');