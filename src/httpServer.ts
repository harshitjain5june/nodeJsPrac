import http from "http"
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/plain' });

    res.end('Hello World how are u? hi\n');
});

// Prints a log once the server starts listening
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})