var express = require('express');
var app = express();


app.get('/', function (req, res) {
    res.send('Welcome');
});

app.get('/user/:name', function (req, res) {
    res.send('Welcome ' + req.params.name);
})


app.listen(3000);