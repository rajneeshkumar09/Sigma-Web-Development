/* Further Reading (Node Js Modules) : https://nodejs.org/en/learn/getting-started/introduction-to-nodejs */

// const http = require('node:http');
const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;
const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});