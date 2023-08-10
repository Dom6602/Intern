
const fs = require("fs");

fs.readFile("index.html", "utf8", (err, html) => {
  if (err) {
    throw err;
  }
  else{
    console.log('work');
  }
})

