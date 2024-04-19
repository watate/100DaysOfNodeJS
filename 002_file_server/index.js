const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, decodeURI(req.url));
    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === "ENOENT") {
                res.statusCode = 404;
                res.end("404: File not found");
            } else {
                res.statusCode = 500;
                res.end("500: Internal Server Error");
            }
            return;
        }
        res.statusCode = 200;
        res.end(data);
    })
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});