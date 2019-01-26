var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(express.static(path.join(__dirname)))
app.use('/dist',serveStatic(__dirname + "/dist"));

app.get('/', (req, res) => {
    res.sendFile('index.html');
})
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);


    // "dev": "cross-env NODE_ENV=development webpack-dev-server --open --hot",
    // "build": "cross-env NODE_ENV=production webpack --progress --hide-modules"