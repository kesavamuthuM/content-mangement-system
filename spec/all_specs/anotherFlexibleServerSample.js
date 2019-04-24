/**
 * 
 */

describe("SinonFakeServerWithJasmine", function() {
	var server;

	beforeEach(function() {
		server = sinon.fakeServer.create();
	});

	afterEach(function() {
		server.restore();
	});

	it("should fake a jQuery ajax request", function() {
		server.respondWith("POST", "/something", [ 200, {
			"Content-Type" : "plain/text"
		}, '{  "in here" }' ]);

		
		var myCallback = sinon.spy(function(responseText, status){
			if(status === 'success')
				alert(responseText);
			else
				alert('we don"t make it' + status);
		});

		$.post("/something", myCallback);
		

		console.log(server.requests); // Logs all requests so far
		server.respond(); // Process all requests so far

		/*expect(callbacks[0].calledOnce).toBeTruthy();
		expect(callbacks[0].calledWith({
			stuff : "is",
			awesome : "in here"
		})).toBeTruthy();
		expect(myCallback.calledOnce).toBeTruthy();
		expect(myCallback.calledWith({
			stuff: 'is',
			awesome: 'in here'
		})).toBeTruthy();
		
		expect(callbacks[1].calledOnce).toBeFalsy(); // Unknown URL /other
		*/												// received 404
	});
});
