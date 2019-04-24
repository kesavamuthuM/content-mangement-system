/**
 * 
 */

var _username = "kesav.muthuraj@anywhere.co";
var _password = "1aAcvbds.";
// const $ = require('../../../../spec/lib/jquery/jquery');
const login = {
	validate : function(username, password) {
		alert(username + password);
		if (_username === username && _password == password) {
			this.requestSender();
			return true;
		} else {
			this.requestSender();
			return false;
		}

	},
	lengthCheck : function(username, password) {
		return (username.lenght > 4 && password.lenght > 4) ? username.length
				+ password.length
				: username.length > password.length ? password.length
						: username.length;
	},
	requestSender : function() {

		$.post("/login?username=" + _username + "&password=" + _password,
				function(responseText) {

					if (responseText == "allow") {
						window.location.href = "/html/home.html";
					} else
						alert('you entered the wrong username and password');

				})

		/*
		 * var passingData = { username : _username, password : _password };
		 * //console.log(passingData);
		 * 
		 * $.ajax({ url : "/login", type : 'post', dataType : 'json', data :
		 * JSON.stringify({ username : _username, password : _password }),
		 * contentType : 'application/json', mimeType : 'application/json',
		 * success : function(data) { if (responseText == "allow") {
		 * window.location.href = "/html/home.html"; } else alert('you entered
		 * the wrong username and password'); } })
		 */
	}

};
