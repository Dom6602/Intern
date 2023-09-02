module.exports = (req, res) => {
    let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
    let id = req.url.split("/")[2];

    const regex = new RegExp(
      /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
    );
  
    if (req.url === "/") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify("End Points"));
      res.end();
    }else if (req.url === "/clients") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify(req.clients));
      res.end();
    } else if (!regex.test(id)) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          title: "Validation Failed",
          message: "Path is not valid",
        })
      );
    } else if (baseUrl === "/clients/" && regex.test(id)) { 
      res.setHeader("Content-Type", "application/json");
      let filteredClient = req.clients.filter((client) => {
        return client.id === id;
      }); 
  
      if (filteredClient.length > 0) {
        res.statusCode = 200;
        res.write(JSON.stringify(filteredClient));
        res.end();
      } else {
        res.statusCode = 404;
        res.write(
          JSON.stringify({ title: "Not Found", message: "Path not found" })
        );
        res.end();
      }
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ title: "Not Found", message: "Route not found" }));
    }
  };