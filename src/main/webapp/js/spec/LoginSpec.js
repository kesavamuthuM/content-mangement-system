/**
 * 
 */

describe("login checker", function(){
	it("check the username and password for login", function(){
		var login = new Login();
		var username, password;
		expect(login.add("wee", "sdfljsdfsf")).toBe(false);
		expect(login.add(1, 2)).toBe("Please enter your name begin with letter");
		expect(login.add("username", "password")).toBe(true);
		expect(login.check("username", "password")).toEqual("usernamepassword");
		expect(login.check("yuopj ", "whatis")).toBe("username or password you entered is wrong");
	})
}) 	