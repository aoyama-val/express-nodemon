const express = require('express');
const app = express();

const server = app.listen(3000, function() {
    console.log('Node.js is listening to port: ' + server.address().port);
});

app.get('/', function(req, res, next) {
    console.log('query:', req.query);
    res.json({ message: 'Hello from express!' });
});