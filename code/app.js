var express = require('express');
var app     = express();
var port    = process.env.PORT || 3000;
var myRouter  = require('./myRouter.js');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/candies', myRouter);

app.listen(port);

console.log("Server up");
