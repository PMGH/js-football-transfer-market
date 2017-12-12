var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("client/build"));


// set up mongo client
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/transfer_market", function(err, database){
	if (err){
		return console.log(err);
	}
	db = database;
	console.log("Connected to DB");

	app.listen(3000, function(){
		console.log("Listening on port " + this.address().port);
	});

});

app.get("/", function(req, res){
	res.sendFile(__dirname + "/client/build/index.html");
});
