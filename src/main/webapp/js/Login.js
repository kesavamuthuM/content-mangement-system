/**
 * 
 */

var _username = "kesav.muthuraj@anywhere.co";
var _password = "1aAcvbds.";

const login = {
	validate : function(username, password) {
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
		/*
		 * var xhttp = new XMLHttpRequest(); xhttp.onreadystatechange =
		 * function() { alert('status is' + this.readyState); if
		 * (this.readyState == 4 && this.readyState == 200) this.response();
		 * else var a = this.response(); alert(a); } alert('status is' +
		 * xhttp.readyState); xhttp.open("GET", "/login?username=" + _username +
		 * "&password=" + _password, true); alert('status is' +
		 * xhttp.readyState); xhttp.send();
		 */
		$(document)
				.ready(
						function() {
							$
									.post(
											"/login?username=" + _username
													+ "&password=" + _password,
											function(responseText) {
												if (responseText == "allow") {
													window.location.href = "/html/home.html";
												} else
													alert('you entered the wrong username and password');
											})

						})
	}
};

module.exports = login;
