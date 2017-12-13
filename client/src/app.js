var clubView = require('./views/clubView.js');

var makeRequest = function(url, callback){
	var request = new XMLHttpRequest();
	request.open("GET", url);
	request.addEventListener('load', callback);
	request.send();
};

var requestComplete = function(){
	if (this.status !== 200){
		return console.log("Request failed");
	}
	console.log("Request successful");
	var jsonString = this.responseText;
	var apiData = JSON.parse(jsonString);
	console.log(apiData);
	var clubs = [];
	console.log(clubs);
	apiData.forEach(function(player){
		if (!clubs.includes(player.club)){
			clubs.push(player.club);
		}
	});
	var ui = new clubView(clubs);
};

var app = function(){
	console.log("Running app.js");
	var url = "/players";
	makeRequest(url, requestComplete);
};

window.addEventListener("load", app);
