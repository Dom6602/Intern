const http = require('http');
const fs = require('fs');
const path = require('path');
// const mime = require('mime');   //application/json, image/png,

const port = 3000;
const filePath = './data.txt';

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    
    fs.readFile(filePath, 'utf-8', (err, data) => {

      if (err) {
        // console.error('Error reading the file:', err);
        res.end('Error reading the file Becoz Server problem.');            // res.writeHead(500, { 'Content-Type': 'text/plain' });
      } 
      else {
        console.log('File contents:', data); 
         
        res.end(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>Text File Reader</title>
            </head>
            <body>
              <h1>Text File Content</h1>
              <p>${data}</p>
              <textarea cols="40" rows="5" id="textArea" required /></textarea><br>
              <button type="submit" id="btn" onclick="button()">Enter</button>  
            </body>
          </html>

          <script>

          function button() {

            test = document.getElementById('textArea').value
            console.log(test)

          </script>

        `);
      }
    });
  } 
  
  else {
    res.end('404 Not Found');       // res.writeHead(400, { 'Content-Type': 'text/plain' });
  }
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});

// http.createServer(function (req, res) { block }).listen(port)



