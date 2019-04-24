/**
 * 
 */

beforeAll(function() {
	function once(fn) {
		var returnValue, called = false;
		return function() {
			if (!called) {
				called = true;
				returnValue = fn.apply(this, arguments);
			}
			return returnValue;
		};
	}
})

afterAll(function() {
	sinon.fake();
	sinon.restore();
})
describe(
		"check the entered login input is in the correct format or not",
		function() {
			var stub;
			beforeEach(function() {
				stub = sinon.stub(login, 'validate');
			});
			afterEach(function() {
				stub.restore();
			});
			it("should allow in entering Email ID and password is correct", function() {
				stub.returns(true);
				expect(
						login.validate('kesav.muthuraj@anywhere.co',
								'1aAcvbds.')).toBeTruthy();
			});

			it(
					"should not allow to go homepage Entering Email ID and password is incorrect",
					function() {
						expect(login.validate('username', 'lfjfjlsdf'))
								.toBeFalsy();

					});
		});
			

			describe(
					"checking length of email and password",
					function() {
						it(
								"checking the length of password and email that it satisfies",
								function() {

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

					});

			describe('creating fake server', function() {
				var server, stub;
				beforeEach(function() {
					server = sinon.fakeServer.create();
					server.respondWith("POST","/login?username=kesav.muthuraj@anywhere.co&password=1aAcvbds.",[ 200, {
						"Content-Type" : "text/plain"
					}, '{"allow"}' ]);
				});

				afterEach(function() {
					server.restore();
					sinon.restore();
				});

				it('should provide the desired response', function() {

					var stub = sinon.stub($, 'post');

					login.requestSender();
					server.respond();
					expect(stub.calledOnce).toBeTruthy();
					

				});
				
				it('should not allow them ', function(){
					var stub = sinon.stub($, 'get');
					$.get('/something', status, function(responseText){
						if(status === 'success' )
							alert('allowed');
						else
							alert(status + responseText);
					})
					
					expect(stub.calledOnce).toBeTruthy();
					/*expect(stub.calledWithArgs{'{"allow"}'}).toBeTruthy();*/
					
				})
				
				
			})

	
