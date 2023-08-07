const http = require('http')
const fs = require('fs')
const path = require('path');
const { log } = require('console');

port = 3000

server = http.createServer(function(req, res) {
    
url = req.url

// (req.method === 'GET' && req.url === '/')

let filePath;

    if (url === '/') {
        filePath = './index.html';
    } 
    else if (url === '/about') {
        filePath = './about.html';
    } 
    else {
        filePath = null;
    }

    if (filePath) {
        fs.readFile(filePath, (err, content) => {           //fs.readFile(filePath, 'utf-8', (err, data) =>  use utf-8 when reading file else print time
            if (err) {
                res.writeHead(500);
                res.end('500 Internal Server Error');
            } 
            else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                // console.log(content);
                res.end(content, 'utf-8');
            }
        });
    } 
    else {
        res.writeHead(404);
        res.end('404 Not Found');
    }



    // Not Working Need PathFile to read File

    // if (url === '/') {
    //     filePath = './index.html';
    //     res.write('index')

    // } 
    // else if (url === '/about') {
    //     filePath = './about.html';
    //     res.write('about')

    // } 
    // else {
    //     filePath = null;
    //     res.write('not')

    // }







});



server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
})