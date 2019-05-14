var express = require("express");


var app = express();

var PORT = process.env.PORT;

app.get("/", function(req, res){

    res.sendFile(__dirname + "/index.html");
});

app.listen(PORT || 3000);

