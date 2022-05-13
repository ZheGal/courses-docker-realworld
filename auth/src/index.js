const express = require('express');
const { connectDb } = require('../helpers/db');
const { host, port } = require('../config');
const app = express();

const startServer = () => {
    app.listen(port, () => {
        console.log(`Auth service is started on ${port} port`);
        console.log(`On host ${host}`);
    });
}

app.get('/test', (req, res) => {
    res.send('Auth server is working correct!!!');
});

connectDb()
    .on('error', console.log)
    .on('disconnect', connectDb)
    .once('open', startServer);