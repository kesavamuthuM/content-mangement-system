/**
 * 
 */

var _username = "username@gmail.com";
var _password = "123456";

const login = {
	check : function(username, password) {
		console.log(username + _username);
		if (_username === username && _password == password)
			return true;
		else
			return false;

	},
	lengthCheck : function(username, password) {
		return (username.lenght > 4 && password.lenght > 4) ? username.length
				+ password.length : username.length > password.length ? password.length : username.length;
	}
};

module.exports = login;
