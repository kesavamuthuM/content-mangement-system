/**
 * 
 */

function Login(){
	var username;
	var password;
}

Login.prototype.getInput = function(username, password){
	this.username = username;
	this.password = password;
	return this.username.lenght !== 0 ;
}

exports.module = login;