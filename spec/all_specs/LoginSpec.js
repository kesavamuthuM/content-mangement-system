/**
 * 
 */

describe("check the entered login input is in the correct format or not",
		function() {
			var login = require('../../src/main/webapp/js/Login');

			it("Entering Email and password is correct", function() {
				expect(login.check('username@gmail.com', '123456'))
						.toBeTruthy();
			})

			it("Entering email and password is incorrect", function() {
				expect(login.check('username', 'lfjfjlsdf')).toBeFalsy();
			})
		})