const http = require('http')
const getReq = require("./methods/get-request");
const postReq = require("./methods/post-request");
const putReq = require("./methods/put-request");
const deleteReq = require("./methods/delete-request");
let clients = require("./data/data.json");

const port = 3000

const server = http.createServer((req, res) => {
    req.clients = clients;
    switch (req.method) {
      case "GET":
        getReq(req, res);
        break;
      case "POST":
        postReq(req, res);
        break;
      case "PUT":
        putReq(req, res);
        break;
      case "DELETE":
        deleteReq(req, res);
        break;
      default:
        res.statusCode = 404;
        res.setHeader("Content-Type", "application/json");
        res.write(
          JSON.stringify({ title: "Not Found", message: "Route not found" })
        );
        res.end();
    }
  });



server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
})