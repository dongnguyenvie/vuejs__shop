const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
app = express();
app.use(express.static(path.join(__dirname)))
app.use('/dist',serveStatic(__dirname + "/dist"));

app.get('/', (req, res) => {
    res.sendFile('index.html');
})
const port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);


// "devv": "cross-env NODE_ENV=development webpack-dev-server --open --hot",
// "buildd": "cross-env NODE_ENV=production webpack --progress --hide-modules",
// "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
// "start": "node server.js",
// "unit": "jest --config test/unit/jest.conf.js --coverage",
// "e2e": "node test/e2e/runner.js",
// "test": "npm run unit && npm run e2e",
// "build": "node build/build.js"