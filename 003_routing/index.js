const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        switch (req.url) {
            case "/":
                res.statusCode = 200;
                res.setHeader("Content-Type", "text/html");
                res.end("<h1>Welcome to the home page</h1>");
                break;
            case "/about":
                res.statusCode = 200;
                res.setHeader("Content-Type", "text/html");
                res.end("<h1>Hi I am Walter</h1>");
                break;
            case "/contact":
                res.statusCode = 200;
                res.setHeader("Content-Type", "text/html");
                res.end("<h1>Contact us at example.email.com</h1>");
                break;
            default:
                res.statusCode = 404;
                res.end("404: Not Found");
                break;
        }
    } else {
        res.statusCode = 405;
        res.end("405: Method not allowed");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})