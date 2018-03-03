
var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');


var app = express();
var PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("connected on " + PORT);
});

// Requires and sets the HTML routes in this file
require('./routing/htmlRoutes.js')(app);

// Requires and sets the API routes in this file
require('./routing/apiRoutes.js')(app);

