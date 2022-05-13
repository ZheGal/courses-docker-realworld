const express = require('express');
const { connectDb } = require('../helpers/db');
const { host, port, apiUrl } = require('../config');
const axios = require('axios');
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

app.get('/auth/testWithApiData', (req, res) => {
    axios.get(`${apiUrl}/testApiData`).then(response => {
        res.json({
            testWithApiData: true,
            apiData: response.data.testWithApi
        }); 
    });
});

app.get("/auth/currentUser", (req, res) => {
    res.json({
        id: 123,
        email: "user@gmail.com"
    });
})

connectDb()
    .on('error', console.log)
    .on('disconnect', connectDb)
    .once('open', startServer);