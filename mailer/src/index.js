const express = require('express');
const { port } = require('../config');
const app = express();

const startServer = () => {
    app.listen(port, () => {
        console.log(`Mailer service is started on ${port} port`);
    });
}

app.get('/register', (req, res) => {
    res.send('Send mail!');
});

startServer();
