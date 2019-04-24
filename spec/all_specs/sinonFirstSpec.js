/**
 * 
 */

/*var sinon = require('sinon');
var once = require('../../src/main/webapp/js/once');*/


describe('function calling checker', function(){
	it('should calls the original function only once', function () {
    var callback = sinon.fake();
    var proxy = once(callback);

    proxy();
    proxy();

    sinon.assert.called(callback);
    sinon.assert.calledOnce(callback);
    
});
})