var http = require("http");
var fs = require("fs");
var url = require("url");

const port = 3000;
const hostname = "127.0.0.1";

const server = http.createServer((req, res) => {
	let q = url.parse(req.url, true);
	let filename = "." + q.pathname;
	fs.readFile(filename, (pblnError, pstrData) => {
		if (pblnError) {
			res.writeHead(404, {"Content-Type": "text/html"});
			res.write("404 Not Found");
			res.end();
		} else {
			res.writeHead(200, {"Content-Type": "text/html"});
			res.write(pstrData);
			return res.end();
		}
	});
});

// Last part of Node: start the server.
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});