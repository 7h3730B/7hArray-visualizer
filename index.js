const http = require("http");
const url = require("url");
const path = require("path");
const pathExists = require("path-exists");
const fs = require("fs");
const {
    port
} = require("./config.json");


http.createServer(function (request, response) {

    const uri = url.parse(request.url).pathname;
    let filename = path.join(process.cwd(), "/src" + uri);

    if (uri == "/") filename += 'index.html';

    fs.readFile(filename, "binary", function (err, file) {
        if (err) {
            response.writeHead(404, {
                "Content-Type": "text/html"
            });
            fs.readFile('./src/404.html', "binary", (err, file) => {
                response.write(file, "binary");
                response.end();
                if (err) {
                    response.writeHead(500, {
                        "Content-Type": "text/plain"
                    });
                    response.write("500 Internal Server Error");
                    response.end();
                }
            });
            return;
        }

        response.writeHead(200);
        response.write(file, "binary");
        response.end();
    });
}).listen(port);

console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");