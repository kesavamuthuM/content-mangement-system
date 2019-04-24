/**
 * 
 */
var requestSender = {
		first: function(responseText, status){

	if(status === 'success')
		alert(responseText.awesome);
	else
		alert(status);
	
	
}
}
describe("SinonFakeServerWithJasmine", function() {
	var server;
	var myCallback;

	beforeEach(function() {
		server = sinon.fakeServer.create();
	});

	afterEach(function() {
		server.restore();
		
	});

	it("should fake a jQuery ajax request", function() {
		server.respondWith("GET", "/something", [ 200, {
			"Content-Type" : "application/json"
		}, '{ "stuff": "is", "awesome": "in here" }' ]);

		var callbacks = [ sinon.spy(), sinon.spy() ];
		myCallback = sinon.spy(requestSender, 'first');
		//myCallback.restore();
		//var stub = sinon.stub(requestSender, 'first');
		jQuery.ajax({
			url : "/something",
			success : callbacks[0]
		});

		jQuery.ajax({
			url : "/other",
			success : callbacks[1]
		});

		$.get("/something", requestSender.first);

		console.log(server.requests); // Logs all requests so far
		server.respond(); // Process all requests so far

		expect(callbacks[0].calledOnce).toBeTruthy();
		expect(callbacks[0].calledWith({
			stuff : "is",
			awesome : "in here"
		})).toBeTruthy();
		expect(myCallback.calledOnce).toBeTruthy();
		expect(myCallback.calledWith({
			stuff: 'is',
			awesome: 'in here'
		})).toBeTruthy();
		//expect(myCallback()).toBe('{ "stuff": "is", "awesome": "in here" }');
		
		expect(callbacks[1].calledOnce).toBeFalsy(); // Unknown URL /other
														// received 404
	});
});


function Person(givenName, familyName) {
  this.givenName = givenName;
  this.familyName = familyName;
}

Person.prototype.getFullName = function() {
  return `${this.givenName} ${this.familyName}`;
};

describe('creating the stub for object prototype', () => {
	it('stub for the prototype one ', () => {
		const gobo = new Person('name', 'anotherName');
		
		expect(gobo.getFullName()).toEqual('name anotherName');
	})
})