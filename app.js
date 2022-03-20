var express = require('express');
var app = express();

var path = require('path');
app.use(express.static(path.resolve('./')));

app.get('/', function(req, res) {
    res.sendFile('index.html', { root: __dirname });
});
app.listen(3000);