const express = require('express');
const { connectDb } = require('../helpers/db');
const { host, port } = require('../config');
const mongoose = require('mongoose');
const app = express();

const postSchema = new mongoose.Schema({
    name: String
});
const Post = mongoose.model('Post', postSchema);

const startServer = () => {
    app.listen(port, () => {
        console.log(`API service is started on ${port} port`);
        console.log(`On host ${host}`);

        // Post.find((err, posts) => {
        //     return (err) ? console.error(err) : console.log(posts);
        // });

        const silence = new Post({ name: 'Silence' });
        console.log('Now we will save our silence!');
        silence.save((err, post) => {
            return (err) ? console.error(err) : console.log(post);
        });
    });
}

app.get('/test', (req, res) => {
    res.send('API server is working correct!!!');
});

connectDb()
    .on('error', console.log)
    .on('disconnect', connectDb)
    .once('open', startServer);