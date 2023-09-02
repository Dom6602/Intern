const port = 3000

const express = require('express');

const bodyParser = require('body-parser');

const path = require('path');

const cors = require('cors');

const app = express()

app.use(cors());

app.use(bodyParser.json());


clients = [
    {
        "us": "john",
        "ps": "secret",
        "work": "india"
    },
    {
        "us": "wick",
        "ps": "secret",
        "work": "us"

    },
    {
        "us": "thomas",
        "ps": "secret",
        "work": "au"

    },
    {
        "us": "allen",
        "ps": "secret",
        "work": "pk"

    },
    {
        "us": "nogara",
        "ps": "secret",
        "work": "sl"


    }
]

app.get("/api/data", (req, res) => {
    res.json(clients);
  });

app.post("/api/login", (req, res) => {
    const { username, password } = req.body;

    for (const client of clients) {
        if (client.us === username && client.ps === password) {
            res.json({ success: true, message: "Login successful", information: client.us });
            return
        }
    }
    res.json({ success: false, message: "Invalid credentials" });
});


app.listen(port, () => {
    console.log("listening");
})

 