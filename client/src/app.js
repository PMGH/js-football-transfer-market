var makeRequest = function(url, callback){
	var request = new XMLHttpRequest();
	request.open("GET", url);
	request.addEventListener(url, callback);
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
};

var app = function(){
	var url = "/players";
	makeRequest(url, requestComplete);
};

window.addEventListener("load", app);
