/**
 * 
 */

function save(user, callback){
	$.post('/user', {
		first: user.firstName, 
		second: user.secondName
	}, callback)
}
describe('fake server request', function(){
	it('should n"t any real request need to send', function(){
		var postStub = sinon.stub($, 'post');
		postStub.yields();
		
		var callback = sinon.spy(function(responseText, status){
			alert(responseText + status);
		});
		var expectedUrl = '/user';
		var expectedParameters = {first: 'some', second: 'what'};
		var parametersToSend = {firstName: 'some', secondName: 'what'};
		save(parametersToSend, callback);
		
		postStub.restore();
		
		sinon.assert.calledOnce(callback);
		sinon.assert.calledWith(postStub, expectedUrl, expectedParameters);
	})
})

describe('one sample spy need to know how it works', function(){
	var spy;
	function mine(){
	$.ajax({
		url: '/login/',
		success: function(responseText, status){
			alert('I got call' + responseText);
		}
	})
	}
	
	
	beforeEach(function(){
		spy = sinon.spy($, 'ajax');
		
		//$.ajax({ url: '/login/'});
	})
	afterEach(function(){
		$.ajax.restore();
	})
	it('should spy on already defined functions', function(){
		mine();
		sinon.assert.calledOnce($.ajax);
		alert($.ajax);
		//expect($.ajax.getCall(0).args[0].url).toEquals('/login/');
		
	})
})