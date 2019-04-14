/**
 * 
 */

function Login(){
	var name ;
	var password;

}

Login.prototype.add = function(username, password){
	if(typeof username === "string"){
		this.name = username;
		this.password = password;

		if(username.length > 4 && password.length > 4)
			return true;
		else 
			return false;
	}
	else 
		return "Please enter your name begin with letter";
}

Login.prototype.check = function(iUsername, iPassword){
	if(this.name === iUsername && this.password === iPassword)
		return this.name+this.password;
	else 
		return "username or password you entered is wrong";
}

module.exports = Login;