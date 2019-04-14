/**
 * 
 */

describe("check the entered login input is in the correct format or not",
		function() {
			var login = require('../../src/main/webapp/js/Login');

			it("Entering Email ID and password is correct", function() {
				expect(login.check('username@gmail.com', '123456'))
						.toBeTruthy();
			})

			it("Entering Email ID and password is incorrect", function() {
				expect(login.check('username', 'lfjfjlsdf')).toBeFalsy();
			})
			
			describe("checking other possibilites for email and password", function(){
				it("checking the length of password and email", function(){
					console.log(login.lengthCheck('username', '1234'));
					expect(login.lengthCheck('username', '1234')).toBeGreaterThan(4);
				})
			})
		})