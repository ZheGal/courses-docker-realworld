const express = require('express');
const app = express();

app.get('/test', (req, res) => {
    res.send('API server is working correct!');
});

app.listen(3000, () => {
    console.log('API service is started on 3000 port');
});