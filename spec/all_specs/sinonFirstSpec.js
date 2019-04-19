/**
 * 
 */

var sinon = require('sinon');
var once = require('../../src/main/webapp/js/once');
const $ = require('jquery');

describe('function calling checker', function(){
	it('calls the original function', function () {
    var callback = sinon.fake();
    var proxy = once(callback);

    proxy();

    assert(callback.called);
});
})