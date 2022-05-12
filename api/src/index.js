const express = require('express');
const app = express();
const port = process.env.PORT || 3888;
const host = process.env.HOST;

app.get('/test', (req, res) => {
    res.send('API server is working correct!');
});

app.listen(port, () => {
    console.log(`API service is started on ${port} port`);
    console.log(`On host ${host}`);
});