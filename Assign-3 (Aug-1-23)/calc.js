const load = require('./module')

console.log(load.add(5, 6));

const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/plain' });

    res.write('Added Header!\n');
    res.write('Working!');

    console.log(req);
    console.log(res);

    res.end();

    
})

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});


// http.createServer(function (req, res) { block }).listen(port)



