// HTTP core modules: node.js main server ki request or response ko handle krta ha.
const http = require('http');

const createServerFunction = (req,resp) => {
        resp.write("<h1>Code Step by step</h1>");
        resp.end();
}

http.createServer(createServerFunction).listen(4500);
