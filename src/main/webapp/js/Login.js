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

	}
};


/*const _username = "username@gmail.com";
const _password = "123456";

function Login(){
	
}
Login.prototype.check = function(username, password){
	console.log(username + _username);
	if (_username === username && _password == password)
		return true;
	else
		return false;

}*/

module.exports = login;


