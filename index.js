var express = require('express');
var app = express();
// let server = require('http').Server(app);

//set port
var port = process.env.PORT || 8000;

app.use(express.static(__dirname + "/views"));

app.get('/', function(req, res, next){
    res.render("home");
});

//app.post('/contact', function(req, res, next){

//});
app.listen(port, function() {
    console.log("App is running on port " + port);
});