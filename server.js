const express = require('express')
const app = express();
const bodyParser = require('body-parser')

app.use(express.static('public'));

app.get('/',function(req, res) {
    res.sendFile('views/index.html', { root:__dirname});
});

app.listen(8080)