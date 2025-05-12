/* Further Reading (Node Js Modules) : https://nodejs.org/en/learn/getting-started/introduction-to-nodejs */

// const http = require('node:http');
/*
import http from "http"

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Type', 'text/html');
    // res.end('Hello World');
    res.end('<h1>Hello World</h1>');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
*/


/* Named Import */
// import {a, b, d} from './myModule.js'
// console.log("Import by name : ", a, b, d);

/* Default import */
// import rajneesh from './myModule.js'
// console.log("Import by default : ", rajneesh);

/* (function(exports, require, module, __filename, __dirname) {
    // Module code actually lives here
}); */

const a = require('./myModule2.js');
console.log(a, __filename, __dirname);
