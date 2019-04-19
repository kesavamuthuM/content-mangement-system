/**
 * 
 */
// const $ = require('../lib/jquery/jquery');
// var fixtures = setUpHTMLFixture();
describe(
		"check the entered login input is in the correct format or not",
		function() {
			// var login = require('../../src/main/webapp/js/Login');

			it("Entering Email ID and password is correct", function() {
				expect(
						login.validate('kesav.muthuraj@anywhere.co',
								'1aAcvbds.')).toBeTruthy();
			})

			it(
					"Entering Email ID and password is incorrect not allow to login",
					function() {
						expect(login.validate('username', 'lfjfjlsdf'))
								.toBeFalsy();
					})

			describe(
					"checking length of email and password",
					function() {
						it(
								"checking the length of password and email that it satisfies",
								function() {
									/*
									 * console.log(login.lengthCheck('username',
									 * '1234'));
									 */
									expect(
											login.lengthCheck('username',
													'12345'))
											.toBeGreaterThan(4);
								})

						it(
								"checking the length of password and email if the length is unsatisfied",
								function() {
									expect(
											login.lengthCheck('username',
													'1234')).toBeLessThan(5);
								})
								
								
								it("trigger the button in login page", function(){
									var spyEvent = spyOn('#loginButton', 'submit');
									$('#loginButton').trigger('click');
									expect('click').toHaveTriggeredOn('#loginButton');
									expect(spyEvent).toHaveBeenTriggered();
								});
					});
		})