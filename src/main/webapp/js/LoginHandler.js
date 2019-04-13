/**
 * 
 */

$(document).ready(function() {
	var email;
	var password;
	$('#loginButton').on('click', function() {
		email = $('#email').val();
		password = $('#pwd').val();
		console.log(email + password);
	})
})

module.exports = LoginHandler;