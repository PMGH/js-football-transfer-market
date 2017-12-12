var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("client/build"));


// set up mongo client
var MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/transfer_market", function(err, client){
	if (err){
		return console.log(err);
	}
	db = client.db("transfer_market");
	console.log("Connected to DB");

	app.listen(3000, function(){
		console.log("Listening on port " + this.address().port);
	});

});


// get all transfer-listed players
app.get("/players/transfer-listed", function(req, res){
	db.collection("players").find({ transferListed: true }).toArray(function(err, results){
		if (err){
			return console.log(err);
		}
		res.json(results);
	});
});

// get all transer-listed players by club
app.get("/players/transfer-listed/club/:club", function(req, res){
	db.collection("players").find({
		club: req.params.club,
		transferListed: true
	}).toArray(function(err, results){
		if (err){
			return console.log(err);
		}
		res.json(results);
	});
});

// get all transfer-listed players by position
app.get("/players/transfer-listed/position/:position", function(req, res){
	db.collection("players").find({
		position: req.params.position,
		transferListed: true
	}).toArray(function(err, results){
		if (err){
			return console.log(err);
		}
		res.json(results);
	});
});

// get all players by club
app.get("/players/club/:club", function(req, res){
	db.collection("players").find({ club: req.params.club }).toArray(function(err, results){
		if (err){
			return console.log(err);
		}
		res.json(results);
	});
});

// get all players by position
app.get("/players/position/:position", function(req, res){
	db.collection("players").find({ position: req.params.position }).toArray(function(err, results){
		if (err){
			return console.log(err);
		}
		res.json(results);
	});
});

// get all players
app.get("/players", function(req, res){
	// find all the players in the db collection 'players' and return as an array within the http response
	db.collection("players").find().toArray(function(err, results){
		if (err){
			return console.log(err);
		}
		res.json(results);
	});
});

// create a player
app.post("/players", function(req, res){
	db.collection("players").save(req.body, function(err, result){
		if (err){
			return console.log(err);
		}

		console.log("Saved to database");
	});
	res.redirect("/");
});

// delete all
app.post("/players/delete-all", function(req, res){
	db.collection("players").remove();
	res.redirect("/");
});

// get home page (index.html)
app.get("/", function(req, res){
	res.sendFile(__dirname + "/client/build/index.html");
});
