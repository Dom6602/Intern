const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('http://127.0.0.1:5500/test.html', (req, res) => {
    const formData = req.body; // Access the posted data

    // Process the data as needed
    console.log('Received data:', formData);

    // Sending a response back to the client
    res.json({ message: 'Data received successfully.' });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
