const crypto = require("crypto");
const requestBodyparser = require("../util/body-parser");
const writeToFile = require("../util/write-to-file");
module.exports = async (req, res) => {
  if (req.url === "/clients") {
    try {
      let body = await requestBodyparser(req);

console.log("sethuuuuuuuu",req.body);


    //   body =        
    //   { 
    //   "isActive": true,
    //   "age": 24,
    //   "name": "johny",
    //   "gender": "female",
    //   "company": "EMERGENT",
    //   "email": "kirstensellers@emergent.com",
    //   "phone": "+1 (831) 564-2190",
    //   "address": "886 Gallatin Place, Fannett, Arkansas, 4656"
    // }

      body.id = crypto.randomUUID();
      req.clients.push(body);
      writeToFile(req.clients);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end();
    } catch (err) {
      console.log(err);
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          title: "Validation Failed",
          message: "Request body is not valid",
        })
      );
    }
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ title: "Not Found", message: "Route not found" }));
  }
};