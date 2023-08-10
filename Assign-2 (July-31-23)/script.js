const fs = require('fs');
const http = require('http');
const path = require('path');
const url = require('url');
const port = 3000;

const filePath = './data.txt';

const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true);
  if (reqUrl.pathname === '/read' && req.method === 'GET') {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error reading the file.');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(data);
      }
    });
  } else if (reqUrl.pathname === '/append' && req.method === 'POST') {
    let data = '';
    req.on('data', chunk => {
      data += chunk;
    });
    req.on('end', () => {
      fs.appendFile(filePath, data, 'utf8', (err) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Error appending data to the file.');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end('Data appended to the file.');
        }
      });
    });
  } else if (reqUrl.pathname === '/delete/:filename' && req.method === 'DELETE') {
    const filename = reqUrl.params.filename;
    fs.unlink(filename, (err) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error deleting the file.');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('File deleted.');
      }
    });
  } else if (reqUrl.pathname === '/create/:filename' && req.method === 'POST') {
    const filename = reqUrl.params.filename;
    fs.writeFile(filename, '', 'utf8', (err) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error creating the file.');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('File created.');
      }
    });
  } else {
    const indexPath = path.join(__dirname, 'index.html');
    fs.readFile(indexPath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error reading the file.');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  }
});
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
