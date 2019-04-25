var parsed ;
var username;
var password;
 const login = {
 	validate : function(Username, Password) {
 		username = Username;
 		password = Password;
 		parsed = username.includes(".") ? username.split('.', 1) : 
 		username.split('@', 1);
 		var tmp = parsed.toString();
 		if(tmp.includes('@'))
 			parsed = tmp.split('@');
 		localStorage.setItem('name', parsed);
 		this.requestSender();	

 	},
 	
 	requestSender : function() {
 		$.post("/login?username=" + username + "&password=" + password,
 			function(responseText) {
 				if (responseText == "allow") {
 					window.location.href = "/html/home.html";
 				} else
 				alert('you entered the wrong username and password');

 			})
 	}
 }
