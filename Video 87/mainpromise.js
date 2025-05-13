import fs from "fs/promises";

let a = await fs.readFile("raj.txt");

// let b = await fs.writeFile("abhi.txt", "\n\n\n\nThis is amazing promise");
let b = await fs.appendFile("abhi.txt", "\n\n\n\nThis is amazing promises");
console.log(a.toString(), b);
