// Module hote hen built in functionalities joke nodejs ke sth atay hen
const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Hello World</h1>");
    res.end();
})

server.listen(3000);