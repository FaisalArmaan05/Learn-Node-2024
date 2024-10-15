const http = require('http');
const data = require('./data');

const createServerFunction = (req,resp) => {
    resp.writeHead(200,{'Content-Type':'application\json'});
    resp.write(JSON.stringify(data));
    resp.end();
}

http.createServer(createServerFunction).listen(4600);
